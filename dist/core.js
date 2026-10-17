export const regions=[
['Asia/Seoul','서울, 부산, 인천, 대전, 대구, 광주, 울산, 제주, 도쿄, 오사카, 교토, 삿포로, 후쿠오카','Seoul, Busan, Incheon, Daejeon, Daegu, Gwangju, Ulsan, Jeju, Tokyo, Osaka, Kyoto, Sapporo, Fukuoka',37.5665,126.978],
['Asia/Shanghai','베이징, 상하이, 홍콩, 타이베이, 싱가포르, 쿠알라룸푸르, 마닐라','Beijing, Shanghai, Hong Kong, Taipei, Singapore, Kuala Lumpur, Manila',31.23,121.47],
['Asia/Bangkok','방콕, 하노이, 호찌민, 자카르타, 프놈펜','Bangkok, Hanoi, Ho Chi Minh City, Jakarta, Phnom Penh',13.756,100.502],
['Asia/Yangon','양곤, 네피도','Yangon, Naypyidaw',16.84,96.17],
['Asia/Dhaka','다카, 팀푸','Dhaka, Thimphu',23.81,90.41],
['Asia/Kathmandu','카트만두','Kathmandu',27.72,85.32],
['Asia/Kolkata','뉴델리, 뭄바이, 콜카타, 콜롬보','New Delhi, Mumbai, Kolkata, Colombo',28.61,77.21],
['Asia/Karachi','카라치, 이슬라마바드, 타슈켄트','Karachi, Islamabad, Tashkent',24.86,67.01],
['Asia/Dubai','두바이, 아부다비, 무스카트','Dubai, Abu Dhabi, Muscat',25.20,55.27],
['Asia/Riyadh','리야드, 도하, 쿠웨이트, 나이로비','Riyadh, Doha, Kuwait, Nairobi',24.71,46.68],
['Europe/Istanbul','이스탄불, 모스크바','Istanbul, Moscow',41.01,28.98],
['Africa/Johannesburg','요하네스버그, 케이프타운','Johannesburg, Cape Town',-26.20,28.04],
['Europe/Athens','아테네, 헬싱키, 부쿠레슈티','Athens, Helsinki, Bucharest',37.98,23.73],
['Europe/Paris','파리, 베를린, 로마, 마드리드, 암스테르담, 취리히','Paris, Berlin, Rome, Madrid, Amsterdam, Zurich',48.86,2.35],
['Europe/London','런던, 리스본, 더블린','London, Lisbon, Dublin',51.51,-.13],
['Atlantic/Reykjavik','레이캬비크, 아크라','Reykjavik, Accra',64.15,-21.94],
['America/Sao_Paulo','상파울루, 리우데자네이루, 부에노스아이레스','São Paulo, Rio de Janeiro, Buenos Aires',-23.55,-46.63],
['America/St_Johns','세인트존스','St. John’s',47.56,-52.71],
['America/Halifax','핼리팩스','Halifax',44.65,-63.58],
['America/New_York','뉴욕, 워싱턴 DC, 토론토, 마이애미','New York, Washington DC, Toronto, Miami',40.71,-74.01],
['America/Bogota','보고타, 리마','Bogotá, Lima',4.71,-74.07],
['America/Chicago','시카고, 댈러스, 휴스턴, 위니펙','Chicago, Dallas, Houston, Winnipeg',41.88,-87.63],
['America/Mexico_City','멕시코시티, 과테말라시티','Mexico City, Guatemala City',19.43,-99.13],
['America/Denver','덴버, 솔트레이크시티','Denver, Salt Lake City',39.74,-104.99],
['America/Phoenix','피닉스','Phoenix',33.45,-112.07],
['America/Los_Angeles','로스앤젤레스, 샌프란시스코, 시애틀, 밴쿠버','Los Angeles, San Francisco, Seattle, Vancouver',34.05,-118.24],
['America/Anchorage','앵커리지','Anchorage',61.22,-149.90],
['Pacific/Honolulu','호놀룰루, 타히티','Honolulu, Tahiti',21.31,-157.86],
['Australia/Perth','퍼스','Perth',-31.95,115.86],
['Australia/Darwin','다윈','Darwin',-12.46,130.84],
['Australia/Adelaide','애들레이드','Adelaide',-34.93,138.60],
['Australia/Brisbane','브리즈번, 괌, 포트모르즈비','Brisbane, Guam, Port Moresby',-27.47,153.03],
['Australia/Sydney','시드니, 멜버른, 캔버라, 호바트','Sydney, Melbourne, Canberra, Hobart',-33.87,151.21],
['Pacific/Noumea','누메아, 호니아라','Nouméa, Honiara',-22.27,166.45],
['Pacific/Auckland','오클랜드, 웰링턴','Auckland, Wellington',-36.85,174.76],
['Pacific/Fiji','수바, 타라와','Suva, Tarawa',-18.12,178.45],
['Pacific/Apia','아피아, 누쿠알로파','Apia, Nuku’alofa',-13.83,-171.75]
];
export const palette=['#FFFFFF','#F3F4F6','#D1D5DB','#9CA3AF','#6B7280','#4B5563','#374151','#1F2937','#111111','#000000',...['#FECACA','#FCA5A5','#EF4444','#991B1B','#FED7AA','#FDBA74','#F97316','#9A3412','#FEF08A','#FDE047','#EAB308','#854D0E','#D9F99D','#BEF264','#84CC16','#3F6212','#A7F3D0','#6EE7B7','#10B981','#065F46','#99F6E4','#5EEAD4','#14B8A6','#115E59','#BAE6FD','#7DD3FC','#0EA5E9','#075985','#C7D2FE','#A5B4FC','#6366F1','#3730A3','#E9D5FF','#D8B4FE','#A855F7','#6B21A8','#FBCFE8','#F9A8D4','#EC4899','#9D174D']];
export function brightness(h,day,night){return h<7||h>=20?night/100:day/100*[.6,.7,.8,.88,.94,.98,1,.96,.9,.82,.72,.62,.54][h-7]}
export function shift(now,width=800,height=600,range=6){const theta=now/180000*Math.PI*2;const amplitude=Math.min(width,height)*Math.max(2,Math.min(10,range))/100;return [Math.sin(theta)*amplitude,Math.sin(theta*.73+1.1)*amplitude*.75]}
export function movementMargin(width,height,range=6){return Math.min(width,height)*Math.max(2,Math.min(10,range))/100+10}

const timeFormats=new Map();export function parts(date,tz){if(!timeFormats.has(tz))timeFormats.set(tz,new Intl.DateTimeFormat('en-GB',{timeZone:tz,hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23',year:'numeric',month:'2-digit',day:'2-digit'}));return Object.fromEntries(timeFormats.get(tz).formatToParts(date).map(p=>[p.type,p.value]));}
export function offset(date,tz){const p=parts(date,tz);return (Date.UTC(+p.year,+p.month-1,+p.day,+p.hour,+p.minute,+p.second)-Math.floor(date.getTime()/1000)*1000)/3600000;}
export function temperature(celsius,unit=0){if(!Number.isFinite(celsius))return '--'+(unit===1?'°F':'°C');return Math.round(unit===1?celsius*9/5+32:celsius)+(unit===1?'°F':'°C')}
export function weatherKind(code,day=true){if(code===0)return day?'sun':'moon';if(code<=3)return 'cloud';if(code===45||code===48)return 'fog';if(code>=95)return 'storm';if((code>=71&&code<=77)||code===85||code===86)return 'snow';return 'rain'}
export function hexToHSV(hex){const n=hex.replace('#',''),[r,g,b]=[0,2,4].map(i=>parseInt(n.slice(i,i+2),16)/255),max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min;let h=0;if(d){if(max===r)h=((g-b)/d)%6;else if(max===g)h=(b-r)/d+2;else h=(r-g)/d+4;h=(h*60+360)%360}return [h,max===0?0:d/max*100,max*100]}
export function hsvToHex(h,s,v){h=((h%360)+360)%360;s=Math.max(0,Math.min(100,s))/100;v=Math.max(0,Math.min(100,v))/100;const c=v*s,x=c*(1-Math.abs(h/60%2-1)),m=v-c;let rgb=h<60?[c,x,0]:h<120?[x,c,0]:h<180?[0,c,x]:h<240?[0,x,c]:h<300?[x,0,c]:[c,0,x];return '#'+rgb.map(n=>Math.round((n+m)*255).toString(16).padStart(2,'0')).join('').toUpperCase()}
export function clockDate(date,tz,locale='ko-KR'){if(locale.startsWith('ko')){const q=parts(date,tz);const weekday=new Intl.DateTimeFormat(locale,{timeZone:tz,weekday:'long'}).format(date);return `${+q.month}월${+q.day}일 ${weekday}`}return new Intl.DateTimeFormat(locale,{timeZone:tz,month:locale.startsWith('en')?'short':'numeric',day:'numeric',weekday:'long'}).format(date)}
