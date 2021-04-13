'use strict'

let Empname, email, deparment, salary;

let totalsalary=0;


function Empinfo(Empname, email, deparment) {

    this.Empname = Empname;
    this.email = email;
    this.deparment = deparment;
    this.salary = Math.floor(Math.random() * 400) + 100;

    Empinfo.all.push(this);


}

Empinfo.all = [];


function render() {

    let divEl = document.getElementById('tableinfo');
    let tableEl = document.createElement('table');
    divEl.appendChild(tableEl);
    tableEl.id = 'newtable';

    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = 'Name';


    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = 'Email';



    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = 'Department';


    let tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent = 'Salary';


    restoreinfo()

    let trEl8 = document.createElement('p');
    tableEl.appendChild(trEl8);
    trEl8.textContent=`Total : ${totalsalary}`;


}
render();


let Employeeinfo = document.getElementById('Employeeinfo');

Employeeinfo.addEventListener('submit', addinfo);


function addinfo(event) {

    event.preventDefault();

    let oldtable = document.getElementById('newtable');
    oldtable.remove();

    Empname = event.target.ename.value;


    email = event.target.emil.value;

    deparment = event.target.Department.value;

    let newEmployee = new Empinfo(Empname, Empname, deparment);

    saveinfo();


    render();

    location.reload();

}


function saveinfo() {
    let savedata = JSON.stringify(Empinfo.all);
    localStorage.setItem('employinfo', savedata);

}



function restoreinfo() {


    let restordata = localStorage.getItem('employinfo');
    if (restordata != null) {
        Empinfo.all = JSON.parse(restordata);

        let newtable1 = document.getElementById('newtable');

        for (let i = 0; i < Empinfo.all.length; i++) {

            let trEl1 = document.createElement('tr');
            newtable1.appendChild(trEl1);

            let tdEl1 = document.createElement('td');
            trEl1.appendChild(tdEl1);
            tdEl1.textContent = Empinfo.all[i].Empname;


            let tdEl2 = document.createElement('td');
            trEl1.appendChild(tdEl2);
            tdEl2.textContent = Empinfo.all[i].email;


            let tdEl3 = document.createElement('td');
            trEl1.appendChild(tdEl3);
            tdEl3.textContent = Empinfo.all[i].deparment;

            let tdEl4 = document.createElement('td');
            trEl1.appendChild(tdEl4);
            tdEl4.textContent = Empinfo.all[i].salary;
            totalsalary = totalsalary + (Empinfo.all[i].salary*1);


        }



    }

}