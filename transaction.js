class Bank
{
    static get_acc_details()
    {
        var acc_details = {
            1001:{ name : "Ann", acno: 1001, pin: 1234, password: "abcd", balance : 2000},
            1002:{ name : "Amil", acno: 1002, pin: 1244, password: "aaabb", balance : 7000},
            1003:{ name : "nithya", acno: 1003, pin: 1111, password: "apple", balance : 200},
            1004:{ name : "Paul", acno: 1004, pin: 4242, password: "tree", balance : 9000}
        }
        return acc_details
    }
    static login()
    {
        var accno = document.querySelector("#acc_no").value;
        var passwd = document.querySelector("#pswd").value;
        try{
            if(isNaN(accno))throw "not a valid account";//checking acc number
        }
        catch(err)
        {
            alert("err");
        }
        let data = Bank.get_acc_details();
        if(accno in data)
        {
            let pwd = data[accno].password;//checking password
            if(pwd == passwd)
            {
                alert("successfully logged in");
                window.location.href="Transaction.html";
            }
            else{
                alert("incorrect password");//if wrong
            }
        }
        else{
            alert("user does not exist");
        }
    }
    static deposit()
    {
        var accno = document.querySelector("#acc_no").value;
        var pin = document.querySelector("#pin").value;
        var amount = Number(document.querySelector("#amt").value);
        let data = Bank.get_acc_details();
        if(accno in data)
        {
            let pin_no = data[accno].pin;
            if(pin == pin_no)
            {
                data[accno].balance += amount;//adding amount
                alert("account has been credited");
                alert("final balance is " + data[accno].balance);
            }
            else
            {
                alert("pin not valid..");
            }
        }
        else{
            alert("incorrect account details");
        }
    }
    static withdraw()
    {
        var accno = document.querySelector("#acc_no").value;
        var pin = document.querySelector("#pin").value;
        var amount = Number(document.querySelector("#amt").value);
        let data = Bank.get_acc_details();
        if(accno in data)
        {
            let pin_no = data[accno].pin;
            if(pin == pin_no)
            {
                data[accno].balance -= amount;
                alert("account has been debited");
                alert("final balance is " + data[accno].balance);
            }
            else
            {
                alert("pin not valid..");
            }
        }
        else{
            alert("incorrect account details");
        }
    }
    static balance_check()
    {
        var n = document.getElementById("acc_no").value;
        let data = Bank.get_acc_details();
        if(n in data)
        {
            let name_b = data[n].name;
            let bal = data[n].balance;
            document.getElementById('name').innerHTML = "hello " + name_b;//to display
            document.getElementById('balance').innerHTML = "your current balance is " + bal + "/-";
        }
    }
}
