$("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-name").val();
    var inputtedLastName = $("input#new-initial-deposit").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    
    $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.fullName());
        $(".first-name").text(newContact.name);
        $(".last-name").text(newContact.initialDeposit);


      $("input#new-name").val("");
      $("input#new-initial-deposit").val("");
    })
})
function resetFields() {
    $("input#new-name").val("");
    $("input#new-initial-deposit").val("");
}