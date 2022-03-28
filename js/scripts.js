$(document).ready(function () {
  $("#form1").submit(function (event) {
    $("#output").text("");
    event.preventDefault();
    const form = document.getElementById("form1");
    const inputs = form.getElementsByTagName("INPUT");
    let items = [];
    for (let i = 0; i < inputs.length; i++) {
      items.push(inputs[i].value);
    }
    items.sort();
    let allCapsItems = [];
    items.forEach((item) => {
      allCapsItems.push(item.toUpperCase());
    });
    allCapsItems.forEach((item) => {
      $("#output1").append("<li>" + item + "</li>");
    });
  });
  $("#form2").submit(function (e) {
    e.preventDefault();
    const sentence = $("#form2").children("input").val();
    const sentenceArray = sentence.split(" ");
    let newSentenceArray = [];
    for (let index = 0; index < sentenceArray.length; index++) {
      if (sentenceArray[index].length > 3) {
        newSentenceArray.push(sentenceArray[index]);
      }
    }
    newSentenceArray.reverse();
    const newSentence = newSentenceArray.join(" ");
    $("#output2").text(newSentence);
  });

  const suites = ["diamonds", "spades", "hearts", "clubs"];
  $("#deck-draw").click(function () {
    const cardTypes = [
      "ace of ",
      "2 of ",
      "3 of ",
      "4 of ",
      "5 of ",
      "6 of ",
      "7 of ",
      "8 of ",
      "9 of ",
      "10 of ",
      "jack of ",
      "queen of ",
      "king of ",
    ];
    let cards;
    suites.forEach((suite) => {
      cardTypes.forEach((cardType) => {
        $("#output-3").append("<li>" + cardType + suite + "</li>");
      });
    });
  });
});
