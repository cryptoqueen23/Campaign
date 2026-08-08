const menu=document.querySelector(".menu"),nav=document.querySelector("#nav");
menu.addEventListener("click",()=>{const o=nav.classList.toggle("open");menu.setAttribute("aria-expanded",o)});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const panel=document.querySelector(".agent"),launch=document.querySelector(".agent-launch"),closeBtn=document.querySelector(".agent-close"),messages=document.querySelector(".messages"),form=document.querySelector(".agent-form"),input=document.querySelector("#agent-input");
function openAgent(){panel.classList.add("open");panel.setAttribute("aria-hidden","false");input.focus()}
function closeAgent(){panel.classList.remove("open");panel.setAttribute("aria-hidden","true")}
launch.addEventListener("click",openAgent);closeBtn.addEventListener("click",closeAgent);

const answers={
 priorities:"Jesus Mendez's campaign emphasizes strong neighborhoods, responsible growth, dependable city services, public safety, accountability, and leadership that listens to Copperas Cove residents.",
 bio:"Jesus Mendez is a retired U.S. Army veteran, community leader, church elder, and Gideon running for Copperas Cove City Council Place 6.",
 contact:'You can call or text the campaign at (254) 432-3147 or email jjmendez3@twc.com.',
 facebook:'You can follow “Jesus Mendez for Copperas Cove City Council Place 6” on Facebook. Use the Facebook button in the Get Involved section.'
};
function add(text,cls){const d=document.createElement("div");d.className=cls;d.textContent=text;messages.appendChild(d);messages.scrollTop=messages.scrollHeight}
function respond(q){
 const s=q.toLowerCase();
 if(/priorit|issue|stand|platform/.test(s)) return answers.priorities;
 if(/who|bio|army|veteran|jesus/.test(s)) return answers.bio;
 if(/contact|phone|call|text|email/.test(s)) return answers.contact;
 if(/facebook|social|follow/.test(s)) return answers.facebook;
 if(/volunteer|help|support|involved/.test(s)) return "You can support the campaign by following and sharing the campaign Facebook page and contacting the campaign directly to ask about volunteer opportunities.";
 return "I can answer basic questions about Jesus Mendez, campaign priorities, contact information, Facebook, and getting involved. For anything else, contact the campaign directly at (254) 432-3147 or jjmendez3@twc.com.";
}
document.querySelectorAll(".quick button").forEach(b=>b.addEventListener("click",()=>{const key=b.dataset.q;add(b.textContent,"user-msg");setTimeout(()=>add(answers[key],"bot"),180)}));
form.addEventListener("submit",e=>{e.preventDefault();const q=input.value.trim();if(!q)return;add(q,"user-msg");input.value="";setTimeout(()=>add(respond(q),"bot"),180)});