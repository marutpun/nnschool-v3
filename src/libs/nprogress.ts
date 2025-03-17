import NProgress from 'nprogress';

NProgress.configure({
  showSpinner: false,
});

NProgress.start();

window.addEventListener('load', function () {
  setTimeout(function () {
    NProgress.done();
  }, 200);
});
