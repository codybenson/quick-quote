<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  :root{--evergreen:#2A5441;--canvas:#FEFAE0;--harvest:#DDA15E;--ink:#2A5441}
  #quote-calculator{font-family:'Poppins',sans-serif;background-color:var(--canvas);color:var(--ink);padding:1.5rem;border-radius:12px;max-width:720px;margin:1rem auto;border:1px solid var(--ink)}
  #quote-calculator h3{font-size:1.6rem;margin:0 0 1rem 0;color:var(--evergreen)}
  #quote-calculator label{display:block;margin-bottom:1rem;font-weight:500}
  #quote-calculator .checkbox-line{display:flex;align-items:center;gap:.65rem;padding:.65rem .75rem;border:1px solid rgba(42,84,65,.2);border-radius:6px;background:#fff;margin-bottom:.85rem;flex-wrap:wrap}
  #quote-calculator .checkbox-line input[type=checkbox]{margin:0}
  #quote-calculator .checkbox-line .price{margin-left:auto;white-space:nowrap}
  #quote-calculator .checkbox-line .hint{flex:1 1 100%;margin-left:calc(1.75rem);font-size:.82rem}
  #quote-calculator .field-row{display:flex;align-items:center;gap:.5rem}
  #quote-calculator select,#quote-calculator input[type=number],#quote-calculator input[type=text]{width:100%;max-width:100%;box-sizing:border-box;padding:.65rem;border:1px solid var(--ink);border-radius:6px;font-size:1rem;background:#fff;color:var(--evergreen)}
  #quote-calculator input[type=checkbox]{transform:scale(1.1);margin-right:.5rem;vertical-align:middle;accent-color:var(--evergreen)}
  .muted{opacity:.6}
  .hint{font-size:.85rem;margin-left:.5rem;color:var(--evergreen)}
  .custom-items{margin-top:1.75rem;padding:1rem;border:1px dashed var(--evergreen);border-radius:8px;background:#fff9f0}
  .custom-items h4{margin:0 0 .35rem 0;font-size:1.05rem;color:var(--evergreen)}
  .custom-items small{display:block;margin-bottom:.75rem;color:var(--ink);opacity:.8}
  .custom-item{display:flex;flex-wrap:wrap;gap:.65rem;align-items:flex-end;margin-bottom:.85rem}
  .field-row input[type=number],
  .field-row input[type=text]{flex:1 1 auto;width:auto;min-width:0}
  .custom-item input[type=text]{flex:1 1 210px;min-width:0}
  .custom-item input[type=number]{flex:0 1 140px;min-width:0}
  .custom-item select{flex:0 1 190px;min-width:0}
  .custom-item button{flex:0 0 auto}
  .custom-items .add-item-btn{background:transparent;color:var(--evergreen);border:1px solid var(--evergreen);padding:.55rem .85rem;border-radius:6px;font-weight:600;cursor:pointer}
  .custom-items .add-item-btn:hover{background:var(--evergreen);color:var(--canvas)}
  .custom-item .remove-item{background:transparent;color:var(--harvest);border:1px solid var(--harvest);padding:.5rem .75rem;border-radius:6px;font-weight:600;cursor:pointer}
  .custom-item .remove-item:hover{background:var(--harvest);color:var(--canvas)}
  .custom-output-list{margin:.5rem 0}
  .custom-output-list .output-line{margin-bottom:.35rem}
  @media (max-width:720px){
    #quote-calculator{padding:1.25rem}
    #quote-calculator h3{font-size:1.45rem;text-align:center}
  }
  @media (max-width:600px){
    #quote-calculator{padding:1rem}
    #quote-calculator label{margin-bottom:.85rem}
    #quote-calculator .field-row{flex-direction:column;align-items:stretch;gap:.35rem}
    #quote-calculator .checkbox-line{padding:.6rem .7rem}
    #quote-calculator .checkbox-line input[type=checkbox]{margin-top:.15rem}
    #quote-calculator .checkbox-line .price{margin-left:0;width:100%;font-weight:600;display:block}
    #quote-calculator .checkbox-line .hint{margin-left:0}
    .custom-items{padding:.85rem}
    .custom-items small{margin-bottom:.6rem}
    .custom-item{flex-direction:column;align-items:stretch}
    .custom-item input[type=text],
    .custom-item input[type=number],
    .custom-item select,
    .custom-item button{flex:1 1 auto;width:100%}
    .custom-item button{align-self:flex-end}
    .quote-actions button{font-size:.95rem}
  }
  #quote-calculator button{background-color:var(--evergreen);color:var(--canvas);border:none;padding:.8rem;border-radius:6px;font-weight:600;cursor:pointer;font-size:1rem;margin-top:1rem}
  #quote-calculator button:hover{filter:brightness(.9)}
  #calculateBtn{width:100%}
  .quote-actions{margin-top:1rem}
  .quote-actions button{width:100%}
  #quote-calculator hr{border:0;border-top:1px solid var(--ink);margin:1.5rem 0}
  .price{color:var(--harvest);font-weight:600;margin-left:.5rem}
  .output-container{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
  .output-block{background:#fff;padding:.9rem;border-radius:8px;border:1px solid var(--ink)}
  .output-title{font-size:1rem;font-weight:700;text-decoration:underline;margin-bottom:.5rem;color:var(--evergreen)}
  .output-line{display:flex;justify-content:space-between;margin-bottom:.5rem;font-size:.95rem}
  .output-line.total{font-weight:700;font-size:1.1rem}
  .info-btn{ display: inline-flex;align-items: center;justify-content: center;width: 24px;height: 24px;flex: 0 0 24px;padding: 0; box-sizing: border-box;border-radius: 50%;border: 1px solid var(--ink);background: #fff;color: var(--ink);font-size: 12px; line-height: 1; cursor: pointer;}
  .info-btn:focus{ outline: 2px solid var(--harvest); outline-offset: 2px; }

  .tooltip{position:absolute;z-index:20;top:100%;left:0;margin-top:.4rem;background:#fff;border:1px solid var(--ink);border-radius:8px;box-shadow:0 12px 28px rgba(0,0,0,.15);padding:.75rem;width:100%;max-width:460px;display:none}
  .tooltip.show{display:block}
  .tooltip h4{margin:0 0 .35rem 0;font-size:1rem;color:var(--evergreen)}
  .tooltip ul{margin:0;padding-left:1.1rem}
  .tooltip li{margin:.25rem 0;font-size:.95rem}
  .tooltip small{display:block;margin-top:.5rem;color:#444}

  .quote-pdf{box-sizing:border-box;font-family:'Poppins',sans-serif;width:8.5in;min-height:11in;padding:.5in;background:var(--canvas);color:var(--ink);margin:0 auto;display:flex;flex-direction:column;position:relative;padding-bottom:1in}
  .quote-pdf .header{border:0;margin:0;padding:0}
  .quote-pdf .motif-strip{background:var(--evergreen);display:grid;grid-template-columns:1fr auto 1fr;align-items:center;height:1.1in;padding:0 .25in;color:var(--canvas)}
  .quote-pdf .motif-left{justify-self:start;text-align:left}
  .quote-pdf .motif-right{justify-self:end;text-align:right}
  .quote-pdf .motif-left small,.quote-pdf .motif-right small{color:var(--canvas);display:block;line-height:1.1}
  .quote-pdf .motif-strip img{max-height:.55in;width:auto;display:block;justify-self:center}
  .quote-pdf .brandbar{color:var(--evergreen);padding-top:5px;margin:.15in 0 0;text-align:center}
  .quote-pdf .brand{font-weight:700;font-size:1.15rem;color:var(--evergreen);text-align:center}
  .quote-pdf .status{text-align:center;margin:0; padding-top: 5px}

  .pdf-main{flex:1 0 auto;margin-top:1.5in;display:grid;grid-template-columns:1fr;gap:.35in}
  .card{border:1px solid var(--evergreen);box-sizing:border-box;width:100%;display:block;overflow:hidden; background: #ffffff}
  .card .thead{background:var(--evergreen);color:var(--canvas);font-weight:800}
  .card .row{display:grid;grid-template-columns:1fr auto;align-items:center;padding:.12in .15in;border-top:1px solid var(--evergreen)}
  .card .cell-desc{font-size:.98rem}
  .card .cell-price{font-size:.98rem;justify-self:end}
  .card .body .row:nth-child(odd){background:#ffffff}
  .card .body .row:nth-child(even){background:#fff9f0}
  .card .totals-block{padding:.08in .15in .12in .35in;background:#ffffff;border-top:1px solid var(--evergreen)}
  .total-line{display:flex;justify-content:space-between;font-weight:700;margin:.05in 0 .06in}
  .meta-line{display:flex;justify-content:space-between;margin:.05in 0;font-size:.95rem}
  .thin-rule{border:0;border-top:1px solid var(--ink);opacity:.5;margin:.06in 0}
  .indent{display:flex;justify-content:space-between;font-style:italic;margin:.04in 0 .02in;padding-left:.15in}

.footer-strip{position: absolute;bottom: 0;left: 50%;transform: translateX(-50%);width: 8.5in;box-sizing: border-box;padding: .18in .5in;background: var(--evergreen);color: var(--canvas);font-size: .9rem;text-align: center;}
  .footer-strip small{color:var(--canvas)}
  @media (max-width:700px){.output-container{grid-template-columns:1fr}}
</style>

<div id="quote-calculator">
  <h3>Quick Quote</h3>

  <label>Business Name (optional)
    <input type="text" id="bizName" placeholder="e.g., Greenville Auto Glass" />
  </label>

  <label>Website Status
    <select id="websiteStatus">
      <option>New</option>
      <option>Existing</option>
    </select>
  </label>

  <label>Web Page Count
    <div class="field-row" style="position: relative;">
      <input type="number" id="pageCount" min="0" value="" placeholder="e.g., 5" aria-describedby="pagePricingTip">
      <button id="pagePricingBtn" class="info-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="pagePricingTip">i</button>
      <div id="pagePricingTip" class="tooltip" role="dialog" aria-modal="false">
        <h4>Website Creation pricing</h4>
        <ul>
          <li>Website Lite: 3 pages at $850</li>
          <li>Website Standard: 5 pages at $1,450</li>
          <li>Website Premium: 10 pages at $2,950</li>
          <li>11 or more pages: add $150 per page on top of Premium</li>
        </ul>
        <small>Starter Bundle: Website Standard Package + Google Business Profile creation for $1,950</small>
      </div>
    </div>
  </label>

  <label>Current Ad Budget
    <input type="number" id="adBudget" min="0" value="0" placeholder="e.g., 1500">
  </label>

  <label class="checkbox-line"><input type="checkbox" id="GBP">Google Business Profile <span class="price">+ $325</span></label>
  <label class="checkbox-line"><input type="checkbox" id="PPCSetup">PPC Campaign Setup <span class="price">+ $375</span></label>
  <label id="seoRow" class="checkbox-line"><input type="checkbox" id="SEO">SEO Tune-Up <span id="seoPriceLabel" class="price">+ $0</span><span id="seoHint" class="hint"></span></label>
  <label class="checkbox-line"><input type="checkbox" id="altText">Image Optimization <span class="price">+ $150</span></label>
  <label class="checkbox-line"><input type="checkbox" id="categoryAudit">Category Structure Audit <span class="price">+ $200</span></label>
  <label class="checkbox-line"><input type="checkbox" id="photography">Photography <span class="price">+ $300</span></label>
  <label class="checkbox-line"><input type="checkbox" id="branding">Branding <span class="price">+ $350</span></label>
  <label class="checkbox-line"><input type="checkbox" id="maintenance">Ongoing Maintenance <span id="maintenancePriceLabel" class="price">+ $0/mo</span></label>
  <label class="checkbox-line"><input type="checkbox" id="PPCManagement">Ongoing PPC Management <span id="ppcMgmtPriceLabel" class="price">+ $0/mo</span></label>

  <div class="custom-items" aria-labelledby="customItemsTitle">
    <h4 id="customItemsTitle">Custom Line Items</h4>
    <small>Add bespoke services or charges that should be part of this quote.</small>
    <div id="customItemsList"></div>
    <button type="button" id="addCustomItemBtn" class="add-item-btn">Add Custom Item</button>
  </div>

  <button type="button" id="calculateBtn">Calculate Quote</button>
  <hr>

  <div class="output-container">
    <div class="output-block">
      <div class="output-title">One-Time Project Fees</div>
      <div id="customOneTimeOutput" class="custom-output-list"></div>
      <div class="output-line total"><span>Total:</span><span>$<span id="oneTimeTotal">0</span></span></div>
      <div class="output-line"><span>Due Today:</span><span>$<span id="dueToday">0</span></span></div>
      <div class="output-line"><span>Due at Completion:</span><span>$<span id="dueCompletion">0</span></span></div>
    </div>
    <div class="output-block">
      <div class="output-title">Monthly Service Fees</div>
      <div class="output-line"><span>Maintenance:</span><span>$<span id="maintenanceCost">0</span>/mo</span></div>
      <div class="output-line"><span>PPC Management:</span><span>$<span id="ppcCost">0</span>/mo</span></div>
      <div id="customMonthlyOutput" class="custom-output-list"></div>
      <div class="output-line total"><span>Monthly Retainer:</span><span>$<span id="monthlyTotalCost">0</span>/mo</span></div>
    </div>
  </div>

  <div class="quote-actions">
    <button type="button" id="downloadBtn">Download PDF</button>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
<script>
  const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
  const getBool=id=>document.getElementById(id).checked;
  const getNum=id=>parseInt(document.getElementById(id).value)||0;
  const getSel=id=>document.getElementById(id).value;
  const money=n=>{
    const num=Number(n||0);
    const rounded=Math.round((num+Number.EPSILON)*100)/100;
    const hasCents=!Number.isInteger(rounded);
    return rounded.toLocaleString(undefined,{minimumFractionDigits:hasCents?2:0,maximumFractionDigits:hasCents?2:0});
  };

  const tipBtn=()=>document.getElementById('pagePricingBtn');
  const tipBox=()=>document.getElementById('pagePricingTip');
  function closeTip(){tipBox().classList.remove('show');tipBtn().setAttribute('aria-expanded','false')}
  function toggleTip(){const o=tipBox().classList.toggle('show');tipBtn().setAttribute('aria-expanded',o?'true':'false')}
  document.addEventListener('click',e=>{const b=tipBtn(),x=tipBox();if(!b||!x)return;if(e.target===b){toggleTip();return}if(!x.contains(e.target)){closeTip()}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeTip()});

  function isStarterBundle(status,pages,gbpOn){return status==='New'&&pages===5&&gbpOn}
  const PRICE_LITE=850,PRICE_STANDARD=1450,PRICE_PREMIUM=2950,PRICE_PER_PAGE=150,PRICE_STARTER_BDL=1950,PRICE_GBP=325,PRICE_PPC_SETUP=375,PRICE_PHOTO=300,PRICE_BRAND=350;
  const TAX_RATE=0.0825;

  const customList=document.getElementById('customItemsList');
  const addCustomItemBtn=document.getElementById('addCustomItemBtn');

  function createCustomItemRow(){
    const row=document.createElement('div');
    row.className='custom-item';

    const desc=document.createElement('input');
    desc.type='text';
    desc.placeholder='Item description';
    desc.setAttribute('data-field','description');
    desc.setAttribute('aria-label','Custom item description');

    const price=document.createElement('input');
    price.type='number';
    price.min='0';
    price.step='0.01';
    price.placeholder='Price';
    price.setAttribute('data-field','price');
    price.setAttribute('aria-label','Custom item price');

    const type=document.createElement('select');
    type.setAttribute('data-field','type');
    type.setAttribute('aria-label','Custom item billing type');
    const optOne=document.createElement('option');
    optOne.value='one-time';
    optOne.textContent='One-Time Project Fee';
    const optMonthly=document.createElement('option');
    optMonthly.value='monthly';
    optMonthly.textContent='Monthly Service Fee';
    type.appendChild(optOne);
    type.appendChild(optMonthly);

    const remove=document.createElement('button');
    remove.type='button';
    remove.className='remove-item';
    remove.textContent='Remove';
    remove.setAttribute('aria-label','Remove custom item');
    remove.addEventListener('click',()=>{row.remove();});

    row.appendChild(desc);
    row.appendChild(price);
    row.appendChild(type);
    row.appendChild(remove);

    return row;
  }

  function getCustomItems(){
    if(!customList)return[];
    return Array.from(customList.querySelectorAll('.custom-item')).map(row=>{
      const description=(row.querySelector('[data-field="description"]')?.value||'').trim();
      const priceVal=row.querySelector('[data-field="price"]')?.value||'';
      const price=parseFloat(priceVal);
      const type=(row.querySelector('[data-field="type"]')?.value)||'one-time';
      return {description,price:isNaN(price)?0:price,type};
    }).filter(item=>item.price>0);
  }

  if(customList){
    customList.appendChild(createCustomItemRow());
    addCustomItemBtn?.addEventListener('click',()=>{
      customList.appendChild(createCustomItemRow());
    });
  }

  function websiteCreation(status,p){
    if(status!=='New'||p<=0)return 0;
    if(p<=3)return PRICE_LITE;
    if(p===4)return PRICE_LITE+PRICE_PER_PAGE;
    if(p===5)return PRICE_STANDARD;
    if(p<10)return PRICE_STANDARD+(p-5)*PRICE_PER_PAGE;
    return PRICE_PREMIUM+(p-10)*PRICE_PER_PAGE
  }
  function calcGBP(on){return on?PRICE_GBP:0}
  function calcPPCSetup(on){return on?PRICE_PPC_SETUP:0}
  function calcSEO(on,p){if(!on)return 0; if(p<=10)return 375; if(p<=25)return 375+(p-10)*25; if(p<=50)return 375+(p-10)*23; return 375+(p-10)*20}
  function calcAltText(on){return on?150:0}
  function calcCategory(on){return on?200:0}
  function calcPhoto(on){return on?PRICE_PHOTO:0}
  function calcBranding(on){return on?PRICE_BRAND:0}
  function calcMaintenance(on,p){if(!on)return 0; if(p<=10)return 299; if(p<=30)return 449; if(p<=60)return 599; return 750}
  function calcPPCMgmt(on,b){return on?Math.max(b*0.15,75):0}

  function updateSEOState(){
    const status=getSel('websiteStatus'),row=document.getElementById('seoRow'),cb=document.getElementById('SEO'),price=document.getElementById('seoPriceLabel');
    if(status==='New'){cb.checked=false;cb.disabled=true;row.style.display='none';price.textContent='Existing sites only'}else{cb.disabled=false;row.style.display='';price.textContent='+ $0'}
  }
  updateSEOState();
  document.getElementById('websiteStatus').addEventListener('change',updateSEOState);

  document.getElementById('calculateBtn').addEventListener('click',()=>{
    updateSEOState();
    const status=getSel('websiteStatus');
    const pages=getNum('pageCount');
    const gbpOn=getBool('GBP');
    const ppcOn=getBool('PPCSetup');
    const seoOn=getBool('SEO')&&(status==='Existing');
    const altOn=getBool('altText');
    const catOn=getBool('categoryAudit');
    const photoOn=getBool('photography');
    const brandOn=getBool('branding');
    const maintOn=getBool('maintenance');
    const ppcMgmtOn=getBool('PPCManagement');
    const budget=getNum('adBudget');
    const useBundle=isStarterBundle(status,pages,gbpOn);
    const customItems=getCustomItems();
    const customOneTimeItems=customItems.filter(item=>item.type==='one-time');
    const customMonthlyItems=customItems.filter(item=>item.type==='monthly');
    const customOneTimeTotal=customOneTimeItems.reduce((sum,item)=>sum+item.price,0);
    const customMonthlyTotal=customMonthlyItems.reduce((sum,item)=>sum+item.price,0);

    let buildP=websiteCreation(status,pages);
    let gbpP=calcGBP(gbpOn);
    if(useBundle){buildP=PRICE_STARTER_BDL;gbpP=0}
    const ppcSetupP=calcPPCSetup(ppcOn);
    const seoP=(status==='Existing')?calcSEO(seoOn,pages):0;
    const altP=calcAltText(altOn);
    const catP=calcCategory(catOn);
    const photoP=calcPhoto(photoOn);
    const brandP=calcBranding(brandOn);

    const fixedOneTime=gbpP+ppcSetupP+seoP+altP+catP+brandP;
    const oneTimeTotal=buildP+fixedOneTime+photoP+customOneTimeTotal;

    const dueToday=(buildP*.5)+fixedOneTime+(customOneTimeTotal*.5);
    const dueComplete=(buildP*.5)+(photoOn?photoP:0)+(customOneTimeTotal*.5);

    const maintP=calcMaintenance(maintOn,pages);
    const ppcMgmtP=calcPPCMgmt(ppcMgmtOn,budget);
    const monthlyTotal=maintP+ppcMgmtP+customMonthlyTotal;

    document.getElementById('seoPriceLabel').textContent=(status==='Existing'&&seoOn)?`+ $${money(seoP)}`:(status==='Existing'?'+ $0':'Existing sites only');
    document.getElementById('maintenancePriceLabel').textContent=`+ $${money(maintP)}/mo`;
    document.getElementById('ppcMgmtPriceLabel').textContent=`+ $${money(ppcMgmtP)}/mo`;
    document.getElementById('oneTimeTotal').textContent=money(oneTimeTotal);
    document.getElementById('dueToday').textContent=money(dueToday);
    document.getElementById('dueCompletion').textContent=money(dueComplete);
    document.getElementById('maintenanceCost').textContent=money(maintP);
    document.getElementById('ppcCost').textContent=money(ppcMgmtP);
    document.getElementById('monthlyTotalCost').textContent=money(monthlyTotal);

    const customOneTimeOutput=document.getElementById('customOneTimeOutput');
    if(customOneTimeOutput){
      customOneTimeOutput.innerHTML='';
      customOneTimeItems.forEach(item=>{
        const line=document.createElement('div');
        line.className='output-line';
        line.innerHTML=`<span>${item.description||'Custom Item'}</span><span>$${money(item.price)}</span>`;
        customOneTimeOutput.appendChild(line);
      });
      customOneTimeOutput.style.display=customOneTimeItems.length?'':'none';
    }

    const customMonthlyOutput=document.getElementById('customMonthlyOutput');
    if(customMonthlyOutput){
      customMonthlyOutput.innerHTML='';
      customMonthlyItems.forEach(item=>{
        const line=document.createElement('div');
        line.className='output-line';
        line.innerHTML=`<span>${item.description||'Custom Item'}</span><span>$${money(item.price)}/mo</span>`;
        customMonthlyOutput.appendChild(line);
      });
      customMonthlyOutput.style.display=customMonthlyItems.length?'':'none';
    }
  });

  function buildRow(desc, price){
    const r=document.createElement('div');r.className='row';
    const c1=document.createElement('div');c1.className='cell-desc';c1.textContent=desc;
    const c2=document.createElement('div');c2.className='cell-price';c2.textContent=price;
    r.appendChild(c1);r.appendChild(c2);return r
  }

  function buildPdfSummary(){
    const status=getSel('websiteStatus');
    const pages=getNum('pageCount');
    const gbpOn=getBool('GBP');
    const ppcOn=getBool('PPCSetup');
    const seoOn=getBool('SEO')&&(status==='Existing');
    const altOn=getBool('altText');
    const catOn=getBool('categoryAudit');
    const photoOn=getBool('photography');
    const brandOn=getBool('branding');
    const maintOn=getBool('maintenance');
    const ppcMgmtOn=getBool('PPCManagement');
    const budget=getNum('adBudget');
    const useBundle=isStarterBundle(status,pages,gbpOn);
    const customItems=getCustomItems();
    const customOneTimeItems=customItems.filter(item=>item.type==='one-time');
    const customMonthlyItems=customItems.filter(item=>item.type==='monthly');
    const customOneTimeTotal=customOneTimeItems.reduce((sum,item)=>sum+item.price,0);
    const customMonthlyTotal=customMonthlyItems.reduce((sum,item)=>sum+item.price,0);

    let buildP=websiteCreation(status,pages);
    let gbpP=calcGBP(gbpOn);
    if(useBundle){buildP=PRICE_STARTER_BDL;gbpP=0}
    const ppcSetupP=calcPPCSetup(ppcOn);
    const seoP=(status==='Existing')?calcSEO(seoOn,pages):0;
    const altP=calcAltText(altOn);
    const catP=calcCategory(catOn);
    const photoP=calcPhoto(photoOn);
    const brandP=calcBranding(brandOn);
    const maintP=calcMaintenance(maintOn,pages);
    const ppcMgmtP=calcPPCMgmt(ppcMgmtOn,budget);

    const fixedOneTime=gbpP+ppcSetupP+seoP+altP+catP+brandP;
    const oneTimeTotal=buildP+fixedOneTime+photoP+customOneTimeTotal;
    const dueToday=(buildP*.5)+fixedOneTime+(customOneTimeTotal*.5);
    const dueComplete=(buildP*.5)+(photoOn?photoP:0)+(customOneTimeTotal*.5);

    const monthlyTotal=maintP+ppcMgmtP+customMonthlyTotal;
    const oneTimeTax=oneTimeTotal*TAX_RATE;
    const oneTimeTotalWithTax=oneTimeTotal+oneTimeTax;
    const dueTodayTax=oneTimeTotal>0?oneTimeTax*(dueToday/oneTimeTotal):0;
    const dueCompleteTax=oneTimeTax-dueTodayTax;
    const dueTodayWithTax=dueToday+dueTodayTax;
    const dueCompleteWithTax=dueComplete+dueCompleteTax;
    const monthlyTax=monthlyTotal*TAX_RATE;
    const monthlyTotalWithTax=monthlyTotal+monthlyTax;

    const hasOneTime=oneTimeTotal>0;
    const hasMonthly=monthlyTotal>0;

    const wrap=document.createElement('div');
    wrap.className='quote-pdf';

    const header=document.createElement('div');
    header.className='header';
    const biz=(document.getElementById('bizName')?document.getElementById('bizName').value.trim():'');
    const today=new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
    const title='Quote'+(biz?' for '+biz:'');
    header.innerHTML='<div class="motif-strip">'+
                     '<div class="motif-left"><small>info@scatterbranchmarketing.com</small><small>903-217-5991</small></div>'+
                     '<img src="https://images.squarespace-cdn.com/content/66847cae85bfb46f92003383/19e63c7b-5de3-4303-aca3-a0cf8579afda/ScatterBranch_Monogram_Tan.png?content-type=image%2Fpng" crossorigin="anonymous" alt="ScatterBranch motif" onerror="this.style.display=\'none\'">'+
                     '<div class="motif-right"><small>'+today+'</small></div>'+
                     '</div>'+
                     '<div class="brandbar"><div class="brand">'+title+'</div></div>'+
                     '<div class="status"><small>Website Status: '+status+' • Webpages: '+(pages||'N/A')+'</small></div>';
    wrap.appendChild(header);

    const main=document.createElement('div');
    main.className='pdf-main';

    if(hasOneTime){
      const card=document.createElement('div');card.className='card';
      const thead=document.createElement('div');thead.className='thead';thead.appendChild(buildRow('One-Time Project Fees',''));
      const body=document.createElement('div');body.className='body';
      if(status==='New'){
        if(useBundle){body.appendChild(buildRow('Starter Bundle (5-page site with Google Business Profile)','$'+money(buildP)));} else if(buildP>0){body.appendChild(buildRow('Website Design','$'+money(buildP)));}}
      if(!useBundle&&gbpOn&&gbpP>0){body.appendChild(buildRow('Google Business Profile','$'+money(gbpP))); }
      if(ppcOn&&ppcSetupP>0){body.appendChild(buildRow('PPC Campaign Setup','$'+money(ppcSetupP))); }
      if(status==='Existing'&&seoOn&&seoP>0){body.appendChild(buildRow('SEO Tune-Up','$'+money(seoP))); }
      if(altOn&&altP>0){body.appendChild(buildRow('Image Optimization','$'+money(altP))); }
      if(catOn&&catP>0){body.appendChild(buildRow('Category Structure Audit','$'+money(catP))); }
      if(photoOn&&photoP>0){body.appendChild(buildRow('Photography','$'+money(photoP))); }
      if(brandOn&&brandP>0){body.appendChild(buildRow('Branding','$'+money(brandP))); }
      customOneTimeItems.forEach(item=>{body.appendChild(buildRow(item.description||'Custom Item','$'+money(item.price)));});
      const totals=document.createElement('div');totals.className='totals-block';
      const subtotal=document.createElement('div');subtotal.className='total-line';subtotal.innerHTML='<span>Subtotal</span><span>$'+money(oneTimeTotal)+'</span>';
      totals.appendChild(subtotal);
      if(oneTimeTax>0){
        const taxLine=document.createElement('div');taxLine.className='meta-line';taxLine.innerHTML='<span>Estimated Tax (8.25%)</span><span>$'+money(oneTimeTax)+'</span>';
        totals.appendChild(taxLine);
      }
      const totalWithTax=document.createElement('div');totalWithTax.className='total-line';totalWithTax.innerHTML='<span>Total w/ Tax</span><span>$'+money(oneTimeTotalWithTax)+'</span>';
      totals.appendChild(totalWithTax);
      const hr=document.createElement('hr');hr.className='thin-rule';
      const i1=document.createElement('div');i1.className='indent';i1.innerHTML='<span>Due Today (est. incl. tax)</span><span>$'+money(dueTodayWithTax)+'</span>';
      const i2=document.createElement('div');i2.className='indent';i2.innerHTML='<span>Due at Completion (est. incl. tax)</span><span>$'+money(dueCompleteWithTax)+'</span>';
      totals.appendChild(hr);totals.appendChild(i1);totals.appendChild(i2);
      card.appendChild(thead);card.appendChild(body);card.appendChild(totals);
      main.appendChild(card);
    }

    if(hasMonthly){
      const card=document.createElement('div');card.className='card';
      const thead=document.createElement('div');thead.className='thead';thead.appendChild(buildRow('Monthly Service Fees',''));
      const body=document.createElement('div');body.className='body';
      if(maintOn&&maintP>0){body.appendChild(buildRow('Website Maintenance','$'+money(maintP)+'/mo')); }
      if(ppcMgmtOn&&ppcMgmtP>0){body.appendChild(buildRow('PPC Management'+(budget?(' (on $'+money(budget)+' ad budget)'):'') ,'$'+money(ppcMgmtP)+'/mo')); }
      customMonthlyItems.forEach(item=>{body.appendChild(buildRow(item.description||'Custom Item','$'+money(item.price)+'/mo'));});
      const totals=document.createElement('div');totals.className='totals-block';
      const subtotal=document.createElement('div');subtotal.className='total-line';subtotal.innerHTML='<span>Subtotal</span><span>$'+money(monthlyTotal)+'/mo</span>';
      totals.appendChild(subtotal);
      if(monthlyTax>0){
        const taxLine=document.createElement('div');taxLine.className='meta-line';taxLine.innerHTML='<span>Estimated Tax (8.25%)</span><span>$'+money(monthlyTax)+'/mo</span>';
        totals.appendChild(taxLine);
      }
      const totalWithTax=document.createElement('div');totalWithTax.className='total-line';totalWithTax.innerHTML='<span>Total Monthly Retainer (est. incl. tax)</span><span>$'+money(monthlyTotalWithTax)+'/mo</span>';
      totals.appendChild(totalWithTax);
      card.appendChild(thead);card.appendChild(body);card.appendChild(totals);
      main.appendChild(card);
    }

    wrap.appendChild(main);

    const footer=document.createElement('div');
    footer.className='footer-strip';
    footer.innerHTML='<small>This quote is valid for 30 days from the date shown above. Pricing may change if scope or third-party costs change. Please review all line items for accuracy before approval.</small>';
    wrap.appendChild(footer);

    return wrap;
  }

  document.getElementById('downloadBtn').addEventListener('click',()=>{
    const summary=buildPdfSummary();
    const biz=(document.getElementById('bizName')?document.getElementById('bizName').value.trim():'')||'Quote';
    const safe=biz.replace(/[^a-z0-9]+/gi,'_').replace(/^_+|_+$/g,'');
    html2pdf().set({
      margin:0,
      filename:(safe?safe:'Quote')+'_Quote.pdf',
      jsPDF:{unit:'in',format:'letter',orientation:'portrait'},
      html2canvas:{scale:2,useCORS:true,allowTaint:false,letterRendering:true},
      pagebreak:{mode:['css','legacy']}
    }).from(summary).save();
  });
</script>
