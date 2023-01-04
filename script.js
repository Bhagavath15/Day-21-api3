//Tamilnadu cases

var pendingCaseUrl = "https://api.data.gov.in/resource/edf54914-06c6-4deb-bd1a-772d32250f3f?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json"

async function pendingCase(){
    var urlFetch1= await fetch(pendingCaseUrl)
    var data2 = urlFetch1.json()
    var finalOut = await data2
    // console.log(finalOut)

    var title = finalOut.title
    // console.log(title)
    var org = finalOut.org[0]
    // console.log(org)

    for(let i of finalOut.records){
        var siNo = i.si_no_
        var district = i.name_of_the_district
        var civilCase = i.civil_cases
        var criminalCase = i.criminal_cases
        var totalPendingCase = i.total_pendency

        // console.log(siNo,district,civilCase,criminalCase,totalPendingCase)

        var parent3 = document.createElement('div')
            parent3.setAttribute('class','card row col-lg-4 col-sm-12')
            parent3.innerHTML =`
            
                <div class="card-header">
                    <h3>${district}<h3>
                </div>
                <div class = "card-body">
                    <p><b>CIVIL CASE</b>:${civilCase}</p>
                    <p><b>CRIMINAL CASE</b>:${criminalCase}</p>
                    <p><b>TOTAL PENDING CASES</b>:${totalPendingCase}</p>
                </div>
            `
            document.querySelector('body').append(parent3) 
    }

}

pendingCase()