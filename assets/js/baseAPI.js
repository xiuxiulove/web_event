const baseUrl = 'http://ajax.frontend.itheima.net';
$.ajaxPrefilter(function (options) {
    console.log(options);
    options.url = `${baseUrl}${options.url}`
})