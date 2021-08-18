const request = require('request');
const fs=require('fs');
const cheerio=require('cheerio');
const jspdf=require('jspdf');
let $;
let data={}

function linkGenerator(error, response, body) {

    if(!error && response.statusCode==200){
       // fs.writeFileSync("index.html",body);
       $=cheerio.load(body);
       let alltopics= $(".no-underline.d-flex.flex-column.flex-justify-center");
       let alltopicnames=$(".f3.lh-condensed.text-center.Link--primary.mb-0.mt-1");
       for(let x=0;x<alltopics.length;x++){
           console.log($(alltopicnames[x]).text().trim());
           console.log("https://github.com/"+$(alltopics[x]).attr("href"));
           getTopicPage($(alltopicnames[x]).text().trim(),"https://github.com/"+$(alltopics[x]).attr("href"));
       }
    }
    //console.log(response);
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
  }

  function getTopicPage(name,url){
      request(url,function(error, response, body){
          if(!error && response.statusCode==200){
              $=cheerio.load(body);
              let allProjects=$('.f3.color-text-secondary.text-normal.lh-condensed .text-bold');
              if(allProjects.length>8){
                  allProjects.slice(0,8);
              }
              for(let x=0;x<allProjects.length;x++){
                  let projectTitle=$(allProjects[x]).text().trim();
                  let projectLink='https://github.com/'+$(allProjects[x]).attr("href");
                  if(!data[name]){
                      data[name]=[{name:projectTitle,link:projectLink}];
                  }else{
                      data[name].push({name:projectTitle,link:projectLink});
                  }
                  getIssuePage(projectTitle,name,projectLink+"/issues");
              }
            //fs.writeFileSync("data.json",JSON.stringify(data));
          }
      })
  }

  function getIssuePage(projectName,topicName,url){
      request(url,function(error, response, body){
          if(!error && response.statusCode==200){
            $=cheerio.load(body);
            let allIssue=$(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open");
            for(let x=0;x<allIssue.length;x++){
                let issueTitle=$(allIssue[x]).text().trim();
                let issueLink='https://github.com/'+$(allIssue[x]).attr("href");
                console.log(issueTitle);
                console.log(issueLink);
                let index=-1;
                for(let i=0;i<data[topicName].length;i++){
                    if(data[topicName][i].name===projectName){
                        index=i;
                        break;
                    }
                }
                if(!data[topicName][index].issues){
                    data[topicName][index]["issues"]=[{Issuename:issueTitle,Issuelink:issueLink}];
                }else{
                    data[topicName][index]["issues"].push({Issuename:issueTitle,Issuelink:issueLink});
                }
            }
            fs.writeFileSync("data.json",JSON.stringify(data));
          }
      })
  }

request('https://github.com/topics', linkGenerator);


//f3.color-text-secondary.text-normal.lh-condensed .text-bold