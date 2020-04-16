class Render {
  
  title({title, badges}) {
    `
    <div class="title">
      <h4>3D Viewer Panel 개발</h4>
      <h4><img class="badge" src="./static/images/client_is_verified.png" /></h4>
      <h4><img class="badge" src="./static/images/premium-client.png" /></h4>
    </div>
    `

    let imgMap = {
      verified: "./static/images/client_is_verified.png",
      premium: "./static/images/premium-client.png"
    }
    let div = document.createElement('div')
    div.className="title"

    let t = document.createElement('h4')
    t.textContent = title
   
    div.appendChild(t)

    badges.map(badge => {
      let h4 = document.createElement('h4')
      let img = document.createElement('img')
      
      img.src = imgMap[badge]
      
      img.className="badge"
      h4.appendChild(img)
      return h4
    }).forEach(b => {
      div.appendChild(b)
    })

    return div
  }

  subDesc({ price, estimatedPeriod , date}) {
    `
    <div class="sub-desc">
      <span class="price">₩ 예상금액 8,000,000원</span>
      <span class="estimated-period">| 예상기간 60일</span>
      <span class="date">| 등록일자 2020.04.14</span>
    </div>
    `

    let div = document.createElement('div')
    div.className="sub-desc"

    let spanPrice = document.createElement('span')
    let spanEstimatedPeriod = document.createElement('span')
    let spanDate = document.createElement('span')
   
    spanPrice.className="price"
    spanEstimatedPeriod.className="estimated-period"
    spanDate.className="date"
    
    spanPrice.textContent = price
    spanEstimatedPeriod.textContent = estimatedPeriod
    spanDate.textContent = date
    
    div.appendChild(spanPrice)
    div.appendChild(spanEstimatedPeriod)
    div.appendChild(spanDate)
    
    return div
  }

  bodyDesc({explain, deadLine, joined}) {
    `
    <div class="body-desc">
      <p>
        [ 본 프로젝트는 클라이언트가 위시켓 이용요금을 부담합니다. ] [ 클라이언트가 직접 발주한 프로젝트입니다. ] <프로젝트 진행 방식> 자사 사무실에서 상주하여 근무가 가능한 개발자 1명을 모집하고 있습니다. - 근무 방식 : 주 5일 출근(상주) - 프로젝트 대금 지급 : 월 단위 지급 모집 인원 : 1명 - 10년 이상 : 1명 (상급이상 투입)
      </p>
      <div class="outer-info">
        <div class="outer-info-data">마감 <strong>2주전</strong></div>
        <div class="outer-info-data">지원자 없음</div>
        <hr />
      </div>
      <div class="clear"></div>
    </div>
    `
    let div = document.createElement('div')
    div.className="body-desc"

    let p = document.createElement('p')
    p.textContent = explain

    let outerInfo = document.createElement('div')
    outerInfo.className="outer-info"

    let outerInfoData1 = document.createElement('div')
    let outerInfoData2 = document.createElement('div')

    outerInfoData1.className = 'outer-info-data'
    outerInfoData2.className = 'outer-info-data'

    outerInfoData1.textContent = deadLine  
    outerInfoData2.textContent = joined  
    
    let hr = document.createElement('hr')
    
    outerInfo.appendChild(outerInfoData1)
    outerInfo.appendChild(outerInfoData2)
    outerInfo.appendChild(hr)
    
    let clear = document.createElement('div')
    clear.className = 'clear'

    div.appendChild(p)
    div.appendChild(outerInfo)
    div.appendChild(clear)

    return div
  }

    
  footer({category, tags, view, commends, like}) {
    `
    <div class="footer">
      <div class="tech">
        <div class="cate">
          <span>디자인</span>
          <span> > </span>
          <span><strong>애플리케이션</strong></span>
        </div>

        <div class="tags">
          <span> | 관련 기술</span>
          <span class="tag">Android</span>
          <span class="tag">Ios</span>
          <span class="tag">Node.js</span>
        </div>
      </div>
      <div class="relative">
        <img src="./static/images/icon_project_card_eye.png" />
        <span>아주높음</span>
        <img src="./static/images/icon_project_card_talk.png" />
        <span>5</span>
        <img src="./static/images/icon_project_card_like.png" />
        <span>19</span>
      </div>
      <div class="clear"></div>
    </div>
    `
    let div = document.createElement('div')
    div.className="footer"

    let spanTech = document.createElement('div')
    spanTech.className="tech"

    let spanCate = document.createElement('div')
    spanCate.className="cate"

    let spanCateSub = document.createElement('span')
    spanCateSub.textContent = category
    spanCate.appendChild(spanCateSub)
    
    let spanTags = document.createElement('div')
    spanTags.className="tags"
    let a = document.createElement('span')
    a.textContent = '| 관련 기술'
    spanTags.appendChild(a)

    tags.map(tag => {
      let span = document.createElement('span')
      span.className="tag"
      span.textContent = tag
      return span
    }).forEach(span => {
      spanTags.appendChild(span)
    })

    let divRelative = document.createElement('div')
    divRelative.className='relative'

    let img1 = document.createElement('img')
    img1.src="./static/images/icon_project_card_eye.png"
    let span1 = document.createElement('span')
    span1.textContent = view

    let img2 = document.createElement('img')
    img2.src="./static/images/icon_project_card_talk.png"
    let span2 = document.createElement('span')
    span2.textContent = commends

    let img3 = document.createElement('img')
    img3.src="./static/images/icon_project_card_like.png"
    let span3 = document.createElement('span')
    span3.textContent = like

    let clear = document.createElement('div')
    clear.className = 'clear'

    divRelative.appendChild(img1)
    divRelative.appendChild(span1)
    divRelative.appendChild(img2)
    divRelative.appendChild(span2)
    divRelative.appendChild(img3)
    divRelative.appendChild(span3)


    spanTech.appendChild(spanCate)  
    spanTech.appendChild(spanTags)  

    div.appendChild(spanTech)
    div.appendChild(divRelative)
    div.appendChild(clear)

    return div
  }
}

export default Render