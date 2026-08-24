// SI-CS J4 — DEMO AUTHENTICATION
const SICS_AUTH_KEY = "sicsJ4DemoSession";
const SICS_USER_KEY = "sicsJ4DemoUser";
const SICS_DEMO_CREDENTIALS = { username: "admin", password: "sicsj4" };
const SICS_AWAY_TIMEOUT = 60000;
function clearAuthSession(){sessionStorage.removeItem(SICS_AUTH_KEY);sessionStorage.removeItem(SICS_USER_KEY)}
function isAuthenticated(){return sessionStorage.getItem(SICS_AUTH_KEY)==="authenticated"}
function getCurrentUser(){try{return JSON.parse(sessionStorage.getItem(SICS_USER_KEY)||"null")}catch{return null}}
function loginDemo(username,password){const valid=username.trim().toLowerCase()===SICS_DEMO_CREDENTIALS.username&&password===SICS_DEMO_CREDENTIALS.password;if(!valid)return{success:false,message:"Username atau password belum sesuai. Silakan coba lagi."};const user={username:"admin",name:"Administrator",role:"Administrator",loginAt:new Date().toISOString()};clearAuthSession();sessionStorage.setItem(SICS_AUTH_KEY,"authenticated");sessionStorage.setItem(SICS_USER_KEY,JSON.stringify(user));return{success:true,user}}
function logoutDemo(){clearAuthSession();window.location.replace("login.html?logout=1")}
function protectPage(){if(location.pathname.endsWith("/login.html"))return true;if(!isAuthenticated()){const requested=`${location.origin}${location.pathname}${location.search}${location.hash}`;const redirect=`${location.pathname}${location.search}${location.hash}`;window.location.replace(`login.html?redirect=${encodeURIComponent(redirect)}&requested=${encodeURIComponent(requested)}`);return false}return true}
function startAuthExpiryWatcher(){if(window.__sicsAuthWatcherStarted||!isAuthenticated())return;window.__sicsAuthWatcherStarted=true;let awayTimer=null;document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){clearTimeout(awayTimer);awayTimer=window.setTimeout(()=>{clearAuthSession();window.location.replace("login.html?expired=1")},SICS_AWAY_TIMEOUT)}else{clearTimeout(awayTimer);awayTimer=null;if(!isAuthenticated()&&!location.pathname.endsWith("/login.html"))window.location.replace("login.html?expired=1")}})}
document.addEventListener("DOMContentLoaded",()=>{if(location.pathname.endsWith("/login.html")){if(isAuthenticated())startAuthExpiryWatcher()}else if(protectPage())startAuthExpiryWatcher()});
