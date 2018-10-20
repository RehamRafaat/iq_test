var pos=0,test,test_status,question,choice,choices,chA,chB,chC,correct=0;
var questions=[
    ["Enter the missing figure: 3 , 5, 8, 13, 21, ??","34","24","45","A"],
    ["Which one of the numbers does not belong in the following series?<br>1 - 2 - 5 - 10 - 13 - 26 - 29 - 48","26","48","5","B"],
    ["Enter the missing character: A, D, G, J, ??","K","N","M","C"],
    ["Enter the missing character: D, G, K, N, R, ??","T","U","W"," B"],
    ["What's the number that is 1/4 of 1/2 of 1/5 of 200:","10","5","15","B"],
    ["Which one of the five is least like the other four :<br>  Dog ,   Mouse  ,  Lion  ,  Snake  ,  Elephant","Snack","Lion","Dog","A"],
    ["Which one of the five choices makes the best comparison? PEACH is to HCAEP as 46251 is to: <br> 25641 ,   26451  ,  12654  ,  51462  ,  15264","12654","25641","15264","C"],
    ["People buy me to eat but never eat me ..what am I?","Glass","Plate","Fruits","B"]
];
function _(x)
{
    return document.getElementById(x);
}
function renderQuestion(){
    test=_("test");
    if(pos>=questions.length)
    {
        test.innerHTML="<br><br><br><h2>You Got "+correct+" of "+questions.length+" questions correct</h2>";
        _("test_status").innerHTML="Test Completed";
        pos=0;
        correct=0;
        return false;
    }
    _("test_status").innerHTML="Question "+(pos+1)+" of "+questions.length;
    question=questions[pos][0];
    chA=questions[pos][1];
    chB=questions[pos][2];
    chC=questions[pos][3];
    test.innerHTML="<h3>"+question+"</h3>";
    test.innerHTML+="<br><input type='radio' name='choices' value='A'>"+chA+"<br>";
    test.innerHTML+="<input type='radio' name='choices' value='B'>"+chB+"<br>";
    test.innerHTML+="<input type='radio' name='choices' value='C'>"+chC+"<br><br>";
    test.innerHTML+="<button onclick='checkanswer()'class='btn btn-success btn-lg' style='margin-top: 50px;'id='submit'>Submit Answer</button>";
}
function checkanswer()
{
   choices=document.getElementsByName("choices");
   for(var i=0; i<choices.length;i++)
   {
       if(choices[i].checked)
       {
           choice=choices[i].value;
       }
   }
   if(choice==questions[pos][4])
   {
       correct++;
   }
   pos++;
   renderQuestion();
}
window.addEventListener("load",renderQuestion,false);