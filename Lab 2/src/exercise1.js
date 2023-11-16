
console.log("Question 1:")
const currentDate = new Date();
const dayNumber = currentDate.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = days[dayNumber];
let hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12;
console.log(`Today is: ${currentDay}.`);
console.log(`Current time is: ${hours} ${ampm} : ${minutes} : ${seconds}`);
console.log("Wait 2s for next question")
console.log('')
setTimeout(() => {
        console.log("")
        console.log("Question 3:")
        function parseCookieHeader(cookieHeader) {
                const cookies = {};
                const cookieArray = cookieHeader.split(';');
                cookieArray.forEach(cookie => {
                    const [name, value] = cookie.trim().split('=');
                    cookies[name] = value;
                });
        
                return cookies;
            }
        const cookieHeader = "cookie1=_hjSessionUser_731679=eyJpZCI6IjZiYzg4NTgzLTA2ODctNWNiMi1hZmM0LTg2YTI1ODUwYmNhMCIsImNyZWF0ZWQiOjE3MDAwOTg0NjA3NDUsImV4aXN0aW5nIjpmYWxzZX0=;__iid=;fpt_uuid=%22cb599e47-590e-4896-b291-40c5cb30b2bf%22;_hjAbsoluteSessionInProgress=0;dtdz=d596bd12-d650-4d78-89d5-912e8a1fe8c2;__su=0;__IP=1952847243;__RC=5;ozi=2000.SSZzejyD7iu_cVEzsr0LpYAPvhoKKa7GR9V-_iX0Iyv-rUpesm1HYJFLvAIU2bQCEj_hgD89M85-sUket0TOZ3So.1;undefined=undefined;_fbp=fb.2.1700098459134.811479027;__zi=3000.SSZzejyD7iu_cVEzsr0LpYAPvhoKKa7GR9V-_yX0Iyz-rUpfsmTGY3FIxQMI0bkADD6YfvO37umqqQofbWuUXm.1;__R=3;cf_clearance=lpmku.w0o66zPtjTxmCqwpt1.8XxPF4FjR_nUdZPU5M-1700098453-0-1-ed57e9f4.6ae96b03.ba56b614-0.2.1700098453;__uif=__uid%3A1758247890457935724%7C__ui%3A-1%7C__create%3A1658247890;__tb=0;vMobile=1;__admUTMtime=1700098459;__iid=;__rtbh.lid=%7B%22eventType%22%3A%22lid%22%2C%22id%22%3A%22yrKoO7UZXt3kMbFEWrwB%22%7D;__su=0;_ga=GA1.3.129436683.1700098450;_ga_ZR815NQ85K=GS1.1.1700098449.1.1.1700098546.60.0.0;_gcl_au=1.1.1072636705.1700098450;_gid=GA1.3.82745712.1700098451;_hjFirstSeen=1;_hjIncludedInSessionSample_731679=0;_hjSession_731679=eyJpZCI6IjdmMzA2NTM3LThmZGYtNGI5YS05MDY3LTM0MWY3NGNiNDhlYSIsImNyZWF0ZWQiOjE3MDAwOTg0NjA3NDcsImluU2FtcGxlIjpmYWxzZSwic2Vzc2lvbml6ZXJCZXRhRW5hYmxlZCI6dHJ1ZX0=;_tt_enable_cookie=1;_ttp=HAsTsJC_cH5BZVAgAGPej_2M8LB;ajs_group_id=null;log_6dd5cf4a-73f7-4a79-b6d6-b686d28583fc=cd73e63d-7b5c-44ce-a0c9-0f8821af6284";
        const parsedCookies = parseCookieHeader(cookieHeader);
        
        console.log("Parsed Cookies:", parsedCookies);
      }, 2000);

