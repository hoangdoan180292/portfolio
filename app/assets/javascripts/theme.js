$(window).ready(function(){
  var height_window       = $(window).height()
  var skills_offset_top   = $('#professionnal-skills').offset().top
  var height_skills       = $('#professionnal-skills').height()

  $(window).scroll(function() {
    if ((( ($(this).scrollTop() + height_skills) - height_skills/6 ) >= skills_offset_top - 150) && $('#professionnal-skills.loaded').length < 1 ) {
      start_bar_progress("#professionnal-skills")
      $('#professionnal-skills').addClass("loaded")
    }
  });

  function start_bar_progress(wrapper) {
    $(wrapper).find('.bar-container').each(function(){
      var progress_wrapper = $(this).find('.progress')
      var percent_wrapper = $(this).find('.percent')
      var percent = progress_wrapper.attr("data-percent")
      progress_wrapper.animate({ "width": percent }, 1000)
      percent_wrapper.html(percent)
    })
  }
})