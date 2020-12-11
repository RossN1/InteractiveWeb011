$( document ).ready(function() {
//define template
var template = $('#sections .section:first').clone();
//define counter
var sectionsCount = 1;

$('body').on('click', '#addQualification', function() {
    //increment
    sectionsCount++;
    //loop through each input
    var section = template.clone().find(':input').each(function(){
        //set id to store the updated section number
        var newId = this.id + sectionsCount;
        //update for label
        $(this).prev().attr('for', newId);
        //update id
        this.id = newId;
    }).end()

    //add new section
    .appendTo('#sections');
    return false;
});


// Store total points, write value to HTML
var totalPoints = 0; 
$('#pointsTotal').html(`<b>Total Points: ${totalPoints}<b>`);

// Get option values
    var totalPoints = 0;
    $(document.body).on('change',"#sections",function (e) {

        var quals = document.querySelectorAll("#QualificationWithGrade fieldset"), i;

        totalPoints = 0;

        for (i = 0; i < quals.length; ++i) {
           var qualification =  quals[i].querySelectorAll("select")[0].value;
           var grade = quals[i].querySelectorAll("select")[1].value;
           totalPoints += gradeValues[qualification][grade];
        }

        if (isNaN(totalPoints)) {
            totalPoints = "Form incomplete"
        }
        $("#pointsTotal b").text(`Total Points: ${totalPoints}`);
        console.log(totalPoints);
    });

    gradeValues = {
      Alevel: {
        Astar: 60,
        A: 50,
        B: 40,
        C: 30,
        D: 20,
        E: 10,
      },
      ASlevel: {
        Astar: 25,
        A: 20,
        B: 16,
        C: 12,
        D: 10,
        E: 6,
      },
      Alevel9credit: {
          Astar: 76,
          A: 68,
          B: 56,
          C: 44,
          D: 34,
          E: 22
      }
    };
});