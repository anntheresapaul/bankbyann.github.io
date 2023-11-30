class Bank{//class

    static account()//function
    {
        const details = {
            1:{age:21,accno:1,password:"ann",name:"anna",place:"EKM"},// key --> value--> array
            2:{age:22,accno:2,password:"aaaa",name:"anu",place:"EKM"},
            3:{age:23,accno:3,password:"abcd",name:"ann",place:"EKM"}
        };
        return details;
    }
    static login()
    {
        let typed_acc = document.querySelector("#ac_no").value;
        let typed_pswd = document.querySelector("#pswd").value;

        let data = Bank.account();

        if(typed_acc in data)
        {
            //present

            //array --> paswd
            let array_pswd = data[typed_acc].password;//data[1].password
            if(typed_pswd == array_pswd)
            {
                //true -- > equal
                // alert("login succesfull");
                window.location.href="balance.html";//location redirection
            }
            else
            {
                //false--> not equal
                alert("wrong pasword");
            }
        }
        else
        {
            //not present
            alert("Acc does not exist");
        }


    }
}

