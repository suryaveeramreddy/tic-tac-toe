var c=0;
function fun(n)
{
    if(n==1)
    {
        let x=document.getElementById("r11");
        if(x.innerHTML=='')
        {
            c=c+1;
        }
        if(c%2!=0 && x.innerHTML!='O')
        {
            x.innerHTML="X";
        }
        if(c%2==0 && x.innerHTML!='X')
        {
            x.innerHTML="O";
        }

    }
    else if(n==2)
    {
        let x=document.getElementById("r12");
        if(x.innerHTML=='')
        {
            c=c+1;
        }
        if(c%2!=0 && x.innerHTML!='O')
        {
            x.innerHTML="X";
        }
        if(c%2==0 && x.innerHTML!='X')
        {
            x.innerHTML="O";
        }
    }
    else if(n==3)
    {
        let x=document.getElementById("r13");
        if(x.innerHTML=='')
        {
            c=c+1;
        }
        if(c%2!=0 && x.innerHTML!='O')
        {
            x.innerHTML="X";
        }
        if(c%2==0 && x.innerHTML!='X')
        {
            x.innerHTML="O";
        }
    }
    else if(n==4)
    {
        let x=document.getElementById("r21");
        if(x.innerHTML=='')
        {
            c=c+1;
        }
        if(c%2!=0 && x.innerHTML!='O')
        {
            x.innerHTML="X";
        }
        if(c%2==0 && x.innerHTML!='X')
        {
            x.innerHTML="O";
        }
    }
    else if(n==5)
    {
        let x=document.getElementById("r22");
        if(x.innerHTML=='')
        {
            c=c+1;
        }
        if(c%2!=0 && x.innerHTML!='O')
        {
            x.innerHTML="X";
        }
        if(c%2==0 && x.innerHTML!='X')
        {
            x.innerHTML="O";
        }
    }
    else if(n==6)
    {
        let x=document.getElementById("r23");
        if(x.innerHTML=='')
        {
            c=c+1;
        }
        if(c%2!=0 && x.innerHTML!='O')
        {
            x.innerHTML="X";
        }
        if(c%2==0 && x.innerHTML!='X')
        {
            x.innerHTML="O";
        }
    }
    else if(n==7)
    {
        let x=document.getElementById("r31");
        if(x.innerHTML=='')
        {
            c=c+1;
        }
        if(c%2!=0 && x.innerHTML!='O')
        {
            x.innerHTML="X";
        }
        if(c%2==0 && x.innerHTML!='X')
        {
            x.innerHTML="O";
        }
    }
    else if(n==8)
    {
        let x=document.getElementById("r32");
        if(x.innerHTML=='')
        {
            c=c+1;
        }
        if(c%2!=0 && x.innerHTML!='O')
        {
            x.innerHTML="X";
        }
        if(c%2==0 && x.innerHTML!='X')
        {
            x.innerHTML="O";
        }
    }
    else if(n==9)
    {
        let x=document.getElementById("r33");
        if(x.innerHTML=='')
        {
            c=c+1;
        }
        if(c%2!=0 && x.innerHTML!='O')
        {
            x.innerHTML="X";
        }
        if(c%2==0 && x.innerHTML!='X')
        {
            x.innerHTML="O";
        }
    }
    var r11=document.getElementById("r11").innerHTML;
    var r12=document.getElementById("r12").innerHTML;
    var r13=document.getElementById("r13").innerHTML;
    var r21=document.getElementById("r21").innerHTML;
    var r22=document.getElementById("r22").innerHTML;
    var r23=document.getElementById("r23").innerHTML;
    var r31=document.getElementById("r31").innerHTML;
    var r32=document.getElementById("r32").innerHTML;
    var r33=document.getElementById("r33").innerHTML;
    if((r11=='X' && r12=='X' && r13=='X') || (r21=='X' && r22=='X' && r23=='X') || (r31=='X' && r32=='X' && r33=='X') || (r11=='X' && r21=='X' && r31=='X') 
    || (r12=='X' && r22=='X' && r32=='X') || (r13=='X' && r23=='X' && r33=='X') || (r11=='X' && r22=='X' && r33=='X') || (r13=='X' && r22=='X' && r31=='X'))
    {
        let p=document.getElementById("para");
        p.innerHTML="X wins"
    }
    else if((r11=='O' && r12=='O' && r13=='O') || (r21=='O' && r22=='O' && r23=='O') || (r31=='O' && r32=='O' && r33=='O') || (r11=='O' && r21=='O' && r31=='O')
    || (r12=='O' && r22=='O' && r32=='O') || (r11=='O' && r22=='O' && r23=='O') || (r13=='O' && r23=='O' && r33=='O') || (r13=='O' && r22=='O' && r31=='O'))
    {
        let p=document.getElementById("para");
        p.innerHTML="O wins"
    }
    else if(c==9)
    {
        location.reload();
    }

}