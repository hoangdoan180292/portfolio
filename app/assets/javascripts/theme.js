$(window).ready(function(){
  $('.bar-container').each(function(){
    var progress_wrapper = $(this).find('.progress')
    var percent_wrapper = $(this).find('.percent')
    var percent = progress_wrapper.attr("data-percent")
    progress_wrapper.animate({ "width": percent }, 1000)
    percent_wrapper.html(percent)
  })
})