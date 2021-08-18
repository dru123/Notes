const request=require("request")
const cheerio=require("cheerio")
let loadedHTML;

let url="https://www.espncricinfo.com/series/kathmandu-mayor-s-cup-2020-21-1253570/nepal-police-club-vs-armed-police-force-club-final-1253581/full-scorecard";

function getLastComment(error,response,body){
    if(error){
        console.error("error: ",error);
    }else{
        if(response.statusCode===200){
            loadedHTML=cheerio.load(body)
            let maxW=0
            let name=""
            //let allCommentary=loadedHTML(".d-flex.match-comment-padder.align-items-center .col-14.col-md-15.col-lg-14")
            //let lastComment=loadedHTML(allCommentary[0]).text()
            //console.log(lastComment);
            let allTables=loadedHTML(".table.bowler")
            for(let x=0;x<allTables.length;x++){
                let allRows=loadedHTML(allTables[x]).find("tr");
                for(let j=0;j<allRows.length;j++){
                    let allTds=loadedHTML(allRows[j]).find("td");
                    let CurrW=loadedHTML(allTds[4]).text()
                    if(CurrW>maxW){
                        maxW=CurrW
                        name=loadedHTML(allTds[0]).text()
                    }
                }
            }
            console.log(name)
        }
        else{
            console.log("There was some error in fetching url: "+url);
        }
    }
}

request(url,getLastComment)