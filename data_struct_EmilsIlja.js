let listArMn = [];
getDates();
function buttonPressDownload()
{
    let infoWhatAllTable = "";
    for(let i = 0; i < listArMn.length; i++)
    {
        infoWhatAllTable = infoWhatAllTable + listArMn[i];
    }
    if(listArMn.length >= 1)
    {
        
        let content = "Komanda,Speletaja Numurs,Punkti" + infoWhatAllTable;
    
        // const csvBlob = new Blob(["1, 5"]);
        const csvBlob = new Blob([content]);
    
        a2.download = "basketbolaDatuIevads.csv";
    
        a2.href = URL.createObjectURL(csvBlob);
    
        a2.click();

        Swal.fire(
        'Fails tika lejupieladets!',
        'Poga bija uzspiesta!',
        'success'
        )
    }
    else
    {
        Swal.fire({
          icon: 'error',
          title: 'Uzspied pogu pievienot iemetienu sakumā!',
          text: '',
        })
    }
}
function newVrInp(button)
{
    let selectElement = document.getElementById("teamSelect");
    let selectedOption = selectElement.options[selectElement.selectedIndex];
    let selectedValue = selectedOption.value;

    let playerNumber = document.getElementById("playerNumber").value;

    let pressedButtonValue = button.value;
    let points = "";
    if(pressedButtonValue == "1")
    {
      points = "1 punkts!"
    }
    if(pressedButtonValue == "2")
    {
      points = "2 punkts!"
    }
    if(pressedButtonValue == "3")
    {
      points = "3 punkts!"
    }
    if(pressedButtonValue == "strafs")
    {
      points = "Soda punkts!"
    }
    //alert(playerNumber);


    if(selectedValue.length < 2 || playerNumber.length < 1)
    {
        Swal.fire({
            icon: 'error',
            title: '<b style="font-family:arial;">Enter all gaps!</b>',
            text: 'You must to complete all gaps before downloading! Each gap must contain at least 2 symbols!',
        })
        return;
    }
    //let gameResult = valTeamEsos + ":" + valTeamAnother;
    let whTP = "\n" + selectedValue +  "," + playerNumber + "," + points;
    listArMn.push(whTP);

    // localStorage.setItem("basketball", listArMn);
    saveDataToLocalStorage('massiveData', listArMn);

    Swal.fire({
    icon: 'info',
    title: 'Bija pielikts iemetiens!',
    text: 'Bija nospiesta poga!',})

    //anulesana
    document.getElementById("playerNumber").value = ""
    document.getElementById("teamSelect").value = "Komanda A";
}


function getDates()
{
    if(getDataFromLocalStorage('massiveData') != null)
    {
        listArMn = getDataFromLocalStorage('massiveData');
    }
    console.log(listArMn);

}


function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getDataFromLocalStorage(key) {
    const storedData = localStorage.getItem(key);
    return JSON.parse(storedData);
}


function clearIeprV()
{
    localStorage.clear();
    listArMn = [];
    Swal.fire({
        icon: 'info',
        title: 'Bija attirita atmiņa!',
        text: 'Bija nospiesta poga!',})
}