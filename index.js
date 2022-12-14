function ans() {
    var number_of_people = $("#number_of_people").val()
    var number_of_buses = $("#number_of_buses").val()
    do_allocation(number_of_people, number_of_buses)

}
function do_allocation(number_of_people, number_of_buses) {
    // initializing an empty array
    var ans = [];

    // assigning variables 
    var a = 1, b = 1;
    var totalPeople = a + b, totalBuses = 2;

    // conditions 

    // if no people are standing in queue
    if (number_of_people == 0) {
        $(".output")[0].innerHTML = "No number of people standing in the queue";
    }

    // if there is only a single bus 
    if (number_of_buses == 1 && number_of_people) {
        totalPeople = 1;
        ans.push(1);
    }

    // adding base cases 
    if (number_of_people >= 2 && number_of_buses >= 2) {
        ans.push(1); ans.push(1);
    }

    // 
    while (totalPeople < number_of_people && totalBuses < number_of_buses) {
        // applying logic of Fibonnacci to add number of people in the bus
        let c = b;
        b = b + a;
        a = c;

        // calculating total number of people boarded 
        totalPeople += b;

        // if total number of people are above the input value then break the loop
        if (totalPeople > number_of_people) {
            ans.push(number_of_people - totalPeople + b);
            break;
        } else {
            ans.push(b);
        }
        totalBuses++;

    }
    // if the number of buses are more 
    while (totalBuses + 1 < number_of_buses) {
        ans.push(0);
        totalBuses++;
    }

    // 
    $(".output")[0].innerHTML = "";
    $(".final-op")[0].innerHTML = "";
    $(".final-op")[0].innerHTML = "Final output : [" + ans + "]";
    for (let i = 0; i < ans.length; i++) {
        $(".output")[0].innerHTML += "Total number of people in bus " + (i + 1) + " : " + ans[i] + " people <br>"
    }

    if (totalPeople < number_of_people) {
        $(".remaining")[0].innerHTML = "Remaining number of people standing in the queue : " + (number_of_people - totalPeople);
    }
}