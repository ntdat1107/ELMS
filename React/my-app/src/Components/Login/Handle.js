const localfile = "./loginData.json";

function userInfor(userName, password, inInstruct) {
    this.userName = userName;
    this.password = password;
    this.isTA = inInstruct;
}

function loadData() {
    var fr=new FileReader();
    fr.readAsText(localfile);
    return [userInfor("dat", "123")];
}

function checkUser(loginInfor) {
    var Data = loadData();
    return (Data.includes(loginInfor));
}

function adduser() {
    var fr=new FileReader();
    fr.readAsText(localfile);
    var Data = loadData();

}

