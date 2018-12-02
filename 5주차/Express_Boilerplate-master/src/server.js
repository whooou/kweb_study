// @flow
import createError from 'http-errors';
import Express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import path from 'path';
import router from './router';

export default class Server {
    app: Express;

    constructor() {
        this.app = new Express();

        this.viewEngine();
        this.middelware();
        this.errorHandle();
    }

    viewEngine(): void {
        const { app } = this;

        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'ejs');
    }

    middelware(): void {
        const { app } = this;

        app.use(logger('dev'));
        app.use(Express.json());
        app.use(Express.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use('/', router);
    }

    errorHandle(): void {
        const { app } = this;

        app.use((req,res,next) => {
            next(createError(404));
        });

        app.use((err, req, res, next) => {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.render('error', { user: req.user });
        });
    }

    listen(port: number): void {
        const { app } = this;
        app.listen(port);
        console.log('Listening to port', port);
    }
}