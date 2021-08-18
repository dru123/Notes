const cheerio=require("cheerio")
const request=require("request")
const fs=require("fs")
let $
let data={}

function getMAtchDetails(error,response,body){
    if(error){
        console.error("error: ",error);
    }else{
        if(response.statusCode===200){
            $=cheerio.load(body)
            let allPlayers=$(".Collapsible tbody tr td a")
            for(let x=0;x<allPlayers.length;x++){
                let playerName=$(allPlayers[x]).text()
                let playerUrl=$(allPlayers[x]).attr("href")
                getDOB(playerName,playerUrl);
            }
        }else{
            console.log("There was an error in fetching match url");
        }
    }
}

function getDOB(playerName,playerUrl){
    request(playerUrl,function(error,res,body){
        if(error){
            console.error("error: ",error);
        }else{
            if(res.statusCode===200){
                $=cheerio.load(body)
                let AllDetails=$(".ciPlayerinformationtxt>span")
                let DOB=$(AllDetails[1]).text().trim()
                data[playerName]=DOB;
                fs.writeFileSync("playerData.json",JSON.stringify(data));
            }else{
                console.log("There was an error in fetching dob url: "+playerUrl);
            }
        }
    })
}

request("https://www.espncricinfo.com/series/england-tour-of-india-2020-21-1243364/india-vs-england-1st-t20i-1243388/full-scorecard",getMAtchDetails)

