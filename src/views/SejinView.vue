<template>
  <div class="sejin-div" style="background-color: black !important;">
    <section class="hero-section" id="heroSection">
      <div>
        <section class="hero-section" id="heroSection">
          <div class="logo-container">
            <div class="play-icon play-icon-left">▶️</div>
            <div class="logo-text">
              <div class="logo-line">
                <span>P⏯️AY</span>
              </div>
              <div class="logo-line">
                <span class="pause-text" id="pauseButton">PA⏸️SE?</span>
              </div>
              <div class="logo-line">
                <span>ST⏹️P?</span>
              </div>
              <div class="logo-line">
                <span>RE⏪IND</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="title-container">
        <h1 class="main-title">'쉬었음' 청년이 말하는 쉬는 이유</h1>
        <h2 class="subtitle">취업? "잠시만요"</h2>
      </div>
    </section>
    <section class="survey-section" id="surveySection">
      <div class="survey-content">
        <img src="https://i.imgur.com/Hreeiqv.png" alt="설문 제목">
        <img src="https://i.imgur.com/GPzj6bu.png" alt="경제활동인구조사">
      </div>
      <img src="https://i.imgur.com/UQAd7vd.png" alt="설문 시작하기" id="startButton">
      <div id="lastSection">
        <img src="https://i.imgur.com/W3HdgvD.png" alt="마지막 섹션">
        <button id="restButton">쉬었음</button>
      </div>
    </section>
    <section class="comments-section" id="commentsSection">
      <div class="comments-container">
        <div class="intro-text" id="introText">
          <p class="editor-note">[편집자 주]</p>
          <p>지난 7월 통계청이 발표한 '15-29세 청년 구직기간'은 평균 11.5개월. 첫 직장을 찾는 데 1년이 걸린다는 의미다. 역대 최장 기간이다.</p>
          <p>"'요즘' 취업이 어렵다"는 말도 반은 맞고 반은 틀리다. 같은 통계에 따르면, 청년층 고용률은 역대 세 번째로 높고, 25세에서 29세까지 고용률은 역대 두 번째로 높다.</p>
          <p>하지만 청년들의 현실은 초라하다. 단기 알바와 계약직이 대부분이기 때문이다. '질 좋은 일자리'는 오히려 줄었다. 대졸자의 대기업 취업문은 여전히 바늘구멍이다.</p>
          <p>여기에 새로운 '무리'가 나타났다. 취업전선에서 고군분투하는 청년들과 별도로 '구직'이라는 말 자체를 거부하는 이들이 늘고 있다.</p>
          <p>이른바 '쉬는 청년'들이다.</p>
        </div>
        <div class="comment-box">
          <img src="https://i.imgur.com/uZHUps0.png" alt="댓글 1" />
        </div>
        <div class="comment-box">
          <img src="https://i.imgur.com/1EV0VsI.png" alt="댓글 2" />
        </div>
        <div class="comment-box">
          <img src="https://i.imgur.com/dcsvcmz.png" alt="댓글 3" />
        </div>
        <div class="comment-box">
          <img src="https://i.imgur.com/6JO9ngm.jpeg" alt="댓글 4" />
        </div>
        <div class="conclusion-text" id="conclusionText">
          <p>비경제활동인구의 증가는 국가의 저성장을 가속화하는 주요 원인으로 지목된다. 한국은 2017년 고령사회에 진입한 데 이어 2025년 초고령사회 진입을 코앞에 두고 있다.</p>
          <p>한국개발연구원(KDI)은 고령화로 인한 생산가능인구 감소가 2030년까지 연간 경제성장률을 0.8%p 낮출 것이라고 분석했다. 여기에 청년들의 사회 진입까지 지연되면 저성장의
            악순환이 반복될 수 밖에 없다. 저성장 사회에서 일명 '쉬었음' 청년이 주목을 받는 이유이다.</p>
          <p>그렇다면 '쉬는 청년'은 누구일까. 이들은 경제활동인구조사에서 "현재 취업을 준비하지도, 구직활동도 하지 않는다고 분류된 청년"들이다.</p>
          <p>쉬는 청년에 대한 여론은 부정적이다. GAPPY가 지난 6월부터 11월 7일까지 '쉬었음', '쉬는 청년'을 키워드로 네이버의 뉴스 댓글을 분석한 결과, <span
              class="highlight">총 72개의 기사에 달린
              3214개의 댓글 중 '쉬는 청년'을 향한 부정적 인식이 78.7%를 차지했다. 옹호적 여론은 3.7%에 그쳤으며, 구조적 문제를 지적하는 의견은 8.7%였다.</span>
          </p>
        </div>
        <div class="chart-container">
          <img src="https://i.imgur.com/LVXdFGP.png" alt="댓글 분석 차트" class="chart">
          <div class="overlay">
            <img src="" alt="상세 정보">
          </div>
          <div class="chart-area" style="top: 20%; left: 0; width: 80%; height: 60%;"
            data-image="https://i.imgur.com/UuTuRla.png"></div>
          <div class="chart-area" style="top: 20%; left: 70%; width: 10%; height: 60%;"
            data-image="https://i.imgur.com/KRK4akP.png"></div>
          <div class="chart-area" style="top: 20%; left: 80%; width: 10%; height: 60%;"
            data-image="https://i.imgur.com/1FtXrHS.png"></div>
          <div class="chart-area" style="top: 20%; left: 90%; width: 10%; height: 60%;"
            data-image="https://i.imgur.com/iCe2Hwb.png"></div>
        </div>
        <div class="articles-sequence">
          <div class="article-box">
            <img src="https://i.imgur.com/2GjDuYE.png" alt="Article 1" class="sequence-article">
          </div>
          <div class="article-box">
            <img src="https://i.imgur.com/rdhjUwC.png" alt="Article 2" class="sequence-article">
          </div>
          <div class="article-box">
            <img src="https://i.imgur.com/GiVPbCI.png" alt="Article 3" class="sequence-article">
          </div>
          <div class="article-box">
            <img src="https://i.imgur.com/6NfiOlJ.png" alt="Article 4" class="sequence-article">
          </div>
        </div>

        <div class="text-conclusion">
          <p>'쉬는 청년'에 대한 비판적 여론이 높은 이유는 명확하다. 청년 세대가 일터에서 빠져나갈수록 국가 전체의 생산성이 감소한다는 것이다. 특히 고령화 시대를 맞아 젊은 세대의 경제활동이
            더욱 절실해진 상황에서, 청년들의 '쉼'은 부정적으로 인식되고 있다.</p>
          <p>그렇다면 '쉬는 청년'은 누구일까. 이들은 경제활동인구조사에서 <span class="highlight">"현재 취업을 준비하지도, 구직활동도 하지 않는다고 분류된
              청년"</span>들이다. GAPPY는 통계청 경제활동인구조사에서 '쉬었음' 항목으로 분류됐거나, 현재 분류된 청년들의 이야기를 직접 들어봤다.</p>
        </div>

        <div class="story-section">
          <div class="story-title">
            <h2>낯선 땅에서 찾은 '나다움'의 가치</h2>
          </div>

          <div class="story-sequence">
            <div class="parallax-container" style="background-image: url('https://i.imgur.com/uLdp6R5.jpeg')">
              <div class="text-overlay">
                <p>심리학을 차석으로 졸업했지만, 남보연(가명, 25)씨는 누구나 예상하는 다음 단계를 선택하지 않았다. 2023년 2월 초 대학교 졸업식을 마치고 보름 만에
                  호주행 비행기에 올랐다.</p>
              </div>
            </div>

            <div class="parallax-container" style="background-image: url('https://i.imgur.com/0w9SOCH.jpeg')">
              <div class="text-overlay quote">
                <p>"삶의 에너지가 완전히 바닥난 상태였어요. 줄곧 도서관에서 살곤 했지만, 그 시간들이 정작 제게 어떤 의미였는지 잘 모르겠더라고요. 무기력했고 자존감도 많이
                  낮았죠. 일단 '회복'이 필요하다고 판단했어요."</p>
              </div>
            </div>

            <div class="parallax-container" style="background-image: url('https://i.imgur.com/0iTAx5c.jpeg')">
              <div class="text-overlay">
                <p>대학원 진학도 고민했지만, 계속 공부만 해온 자신의 모습에 지쳐있었다. 심리학 자격증을 따는 것조차 부담스러웠다.</p>
                <p class="quote-text">"원래는 낯선 환경을 최대한 피하고 무서워하는 성격이었는데, '될 대로 되겠지'하는 마음으로 도전했어요."</p>
              </div>
            </div>
          </div>
        </div>
        <div class="parallax-container" style="background-image: url('https://i.imgur.com/EkncKpZ.jpeg')">
          <div class="text-overlay">
            <p>처음에는 3개월 관광비자로 시작했다. 하지만 시드니에서 보낸 2개월 동안 생각이 바뀌었다. "타지에서 일상을 가꾸는 일이 생각보다 어렵지 않더라고요. 그런데 제가 앞으로 뭘
              할지에 대한 답은 여전히 모호했어요. 그래서 여기서 더 많은 경험을 해보자 싶었죠."</p>
          </div>
        </div>

        <div class="image-text-container">
          <div class="image-section">
            <img src="https://i.imgur.com/dlxAXHw.jpeg" alt="시드니 SOFITEL 호텔">
            <p class="image-caption">남보연씨가 4개월 동안 웨이트리스로 일 했던 시드니 SOFITEL 호텔 전경.</p>
          </div>
          <div class="text-section">
            <div class="text-content">
              <p>그녀는 학생비자로 전환해 현지 직업학교(TAFE)에서 커뮤니티 서비스를 공부했다. 학업과 함께 식당 서빙도 시작했다. 집에서 왕복 3시간 거리를 오가며 일주일에
                2-3일, 하루 4시간 반씩 일했다. 지인의 추천으로 들어간 최저임금도 받지 못하는 일자리였다. 이후 초밥집, 쇼핑몰 플랫폼 사무직도 거쳤다. 6개월 후에는 정식
                절차를 밟아 호텔 웨이트리스로 일하기도 했다.</p>
              <p class="quote-text">"처음엔 두려웠던 것들이 하나둘 극복되더라고요. 낯선 환경에서 혼자 살면서 제 네트워크를 만들어가고, 영어로 의사소통하면서 끝내 제
                힘으로 일자리도 구했잖아요. 자존감이 조금씩 높아지는 걸 느꼈어요."</p>
            </div>
          </div>
        </div>

        <div class="full-screen-container" style="background-image: url('https://i.imgur.com/EkncKpZ.jpeg')">
          <div class="text-box">
            <p>호주 생활에서 가장 큰 깨달음은 '성공'에 대한 관점의 변화였다. "한국에서는 어떤 대학을 나오고, 어떤 직업을 가져야 한다는 기준이 획일적이에요. 반면 호주에서는 학교를
              가지 않거나 대학을 졸업하지 않아도, 각자의 선택을 존중해주는 문화가 인상적이었어요. 맹목적으로 사회가 정한 가치를 따르기보다는 '나다움'이 무엇인지 꾸준히 고민하는 게
              중요하다는 걸 배웠죠 "</p>
          </div>
        </div>

        <div class="expert-section">
          <div class="expert-container">
            <h2 class="expert-title">쉼은 개인의 도피가 아니다</h2>

            <div class="expert-content">
              <p>한국의 많은 청년들이 '쉼'을 선택하는 이유로 일각에서는 낮은 자존감이나 불안한 정신 상태 등 개인적인 문제를 꼽는다. 하지만 전문가들은 사회 구조적인 원인이 더
                크다고 지적한다. 이은경 명지대 청소년심리학과 교수(한국상담심리학회 법인이사)는 다음과 같이 분석했다.</p>

              <div class="expert-quote">
                <p>"입시경쟁에 시달리는 것이 한국 사회의 보편적인 현상이 되면서, 청년들은 진정한 의미의 성취감을 얻지 못하는 경우가 많습니다. 이는 단순히 '자존감이 낮다'로
                  치부할 문제가 아니에요. 우리가 살아가는 경쟁적인 사회에서 청년들은 자율적이고 긍정적인 성취를 경험할 기회가 부족했어요. 그래서 지금의 쉼과 회복은 하나의
                  발달 단계로 봐야 합니다. 결코 나쁜 것이 아니에요."</p>
              </div>

              <p>입시 경쟁으로 인해 낮아진 자존감은 결국 일상생활의 불안정으로 이어지고, 때로는 우울이나 불안 같은 정신건강 문제를 야기하기도 한다. 그 결과 자연스럽게 '쉼'을
                선택하게 되는 경우도 많다는 것이 교수의 설명이다.</p>

              <p>다만 교수는 '쉼'의 유형을 구분해서 볼 필요가 있다고 강조한다. 자발적인 쉼과 비자발적인 쉼이다. 현재 청년들 중 약 3분의 2는 비자발적으로 쉬게 된 경우가 많다는
                것. "이런 친구들에게는 쉰다고 했을 때
                회복할 수 있도록 심리적인 지원을 해주거나 도움을 주는 것이 필요합니다. 그렇지 않으면 더 고립으로 갈 가능성이 높아요."</p>

              <p>특히 취업 시장의 치열한 경쟁도 청년들의 '쉼'을 불가피하게 만드는 요인이 되고 있다. "취업의 자리가 청년에게 그리 호의적인 자리는 아닙니다. 일자리라는 게 경력도
                필요하고 조직 적응도 필요한데, 이런 훈련이 안 되어 있는 친구들에게는 첫 번째 자리가 굉장히 힘들 수 있는 거죠."</p>

              <p>다른 한편, 어려운 취업의 첫 관문을 화려하게 통과했음에도 불구하고 '쉼'을 선택한 청년도 있다.</p>
            </div>
          </div>

          <div class="story-section">
            <div class="story-title">
              <h2>회사의 보호색을 벗고, 자신만의 색을 찾아 떠나다</h2>
            </div>

            <div class="story-sequence">
              <div class="parallax-container" style="background-image: url('https://i.imgur.com/3FrvcVW.jpeg')">
                <div class="text-overlay">
                  <p>삼성전자 IMC팀에서 일하다 퇴사를 선택한 김보 작가의 이야기다. 시각디자인을 전공하고도 마케팅 분야에서 두각을 나타낸 '공모전 헌터', 촉망받는
                    신입사원, 그리고 이제는 '게으름'의 가치를 이야기하는 작가. 그의 이력은 독특하다. 그의 선택은 늘 남달랐다.</p>
                </div>
              </div>

              <div class="parallax-container" style="background-image: url('https://i.imgur.com/R1CTKob.jpeg')">
                <div class="text-overlay">
                  <p>"디자인과를 다니면서도 느꼈어요. 열심히 디자인하고 레퍼런스 모으는 친구들을 보며 '나는 저 정도의 열정은 없다'고 생각했죠. 최고가 되지 않을 거라면
                    어중간하게 하고 싶지 않았어요."</p>
                  <p>대학 8년, 네 번의 휴학. 그는 '게으르다'고 자평했지만, 실은 쉼 없이 도전했다. 에버랜드에서 일하기도 하고, 미국도 다녀왔다. 25살, 3학년이
                    되어서야 진로를 진지하게 고민했다. "디자이너는 하기 싫었어요. 박봉이라는 것도 있었지만, 내게 그만한 예술적 재능이 있는지 확신이 없었거든요. 차라리
                    말로 표현하거나 기획하는 게 더 잘 맞을 것 같았죠."</p>
                </div>
              </div>

              <div class="parallax-container" style="background-image: url('https://i.imgur.com/WMkuLSL.jpeg')">
                <div class="text-overlay">
                  <p>그래서 선택한 것이 공모전이었다. "공부는 못해도 경쟁하는 건 자신 있었어요." 3년 동안 50개가 넘는 마케팅 공모전에 도전해 20개 이상 수상했다.
                    삼성전자 공모전 대상도 거머쥐었다. 졸업과 동시에 삼성전자 IMC팀에 입사했다. 신입으로는 들어가기 힘든 부서였다.</p>
                </div>
              </div>

              <div class="parallax-container" style="background-image: url('https://i.imgur.com/RvQavm0.jpeg')">
                <div class="text-overlay quote">
                  <p>"적성에는 잘 맞았어요. 하지만 회사는 개인의 색깔보다 '대체 가능한 인재'를 원했죠. 서울대를 나왔든, 화려한 스펙이 있든, 결국 다 평범해져야
                    했어요. 게다가 부장님이 지독한 분이었죠. '너 이런 식으로 눈을 떠? 그렇게 눈 뜨려면 실력이 더 있어야 해' 이런 식으로 2-3시간씩 훈계하셨던
                    적도 있어요."</p>
                </div>
              </div>

              <div class="full-screen-container" style="background-image: url('https://i.imgur.com/jWPYzUS.jpeg')">
                <div class="text-box">
                  <p>회사 생활과 별개로 그의 도전은 계속됐다. 유튜브에 커버곡을 올리고, 그림도 그렸다. 국제 광고제 클리오에서 은상을 받기도 했다. 하지만 이런 활동들이
                    오히려 족쇄가 됐다.</p>
                </div>
                <div class="text-box quote">
                  <p>"조금만 피곤한 기색이 보이면 '유튜브 하느라 그러냐', '그런 실력이 있으면 회사 일은 왜 이 정도냐'는 말을 들었죠. 결국 깨달았어요. 회사에서는
                    자신을 최대한 숨기는 게 좋다는 걸요. 그게 일종의 보호색이었던 거죠."</p>

                  <p>3년차가 되자 위기가 찾아왔다. 소위 '3년차병'이다. "회사에서는 '3년만 버티면 괜찮아진다'고 해요. 조직에 익숙해지고, 대리로 승진하면서
                    안정되니까요. 하지만 그게 더 무서웠어요. 내 색깔이 완전히 사라질까 봐."</p>
                </div>
              </div>

              <div class="full-screen-container" style="background-image: url('https://i.imgur.com/tsDSNi5.jpeg')">
                <div class="text-box">
                  <p>결국 1년의 자기계발휴직을 선택했다. 스타트업 창업, 산티아고 순례길, 책 집필 등 다양한 도전을 했지만 실패도 많았다.</p>
                </div>
              </div>

              <div class="full-screen-container" style="background-image: url('https://i.imgur.com/JS8Nw6q.jpeg')">
                <div class="text-box quote">
                  <p>"자기계발휴직 때는 빨리 성공해야 한다는 조바심이 났어요. 지금은 그런 마음을 좀 내려놓았죠. 그때는 몰랐는데, 진짜 '쉼'이 필요했나 봐요." 김보
                    작가의 진짜 쉼은 '쿨링'이다. "쉼은 감성적인 '힐링'이 아니라 생산성을 위한 '쿨링'입니다. 과열된 엔진을 식히듯, 지친 몸과 마음을 식혀야 다시
                    달릴 수 있어요."
                    특히 한국의 청년들에게 이런 쿨링이 절실하다고 강조했다. "죽도록 노력하는 게 '몰입'이라는 말로 포장되어 있지만, 쉼을 병행하는 건 '최선을 다하지
                    않는 것'이 아닙니다. 오히려 더 나은 성과를 위한 필수 과정이에요." </p>
                </div>
              </div>

              <div class="full-screen-container" style="background-image: url('https://i.imgur.com/Y2HjwW4.jpeg')">
                <div class="text-box">
                  <p>현재 그는 게으름의 가치를 이야기하는 작가로 활동하고 있다. "아직 경제적으로는 불안정하지만, 후회하진 않아요.
                    회사에 있었다면 볼 수 없었을 새로운 모습들을 발견하고 있거든요. 제 철학이 하나둘 쌓이는 걸 느껴요."</p>
                </div>
              </div>

              <div class="image-text-container">
                <div class="image-section">
                  <img src="https://i.imgur.com/l27IXz8.jpeg" alt="작가의 모습">
                  <p class="image-caption">김보작가의 인스타툰 중 일부 @bo_eassayist</p>
                </div>
                <div class="text-section">
                  <div class="text-content">
                    <p class="quote-text">"사실 게으름이든 부지런함이든 다 헛수고예요. 자기 주체성이 없다면요. 저는 회사를 나와서 가장 주체적인
                      모습으로 살고 있어요. 다른 기준에 맞추지 않고요. 언젠가 제 이름을 알리고, 뚜렷한 색깔로 영향력을 끼치는 사람이 되고 싶어요. 저는 재미있는
                      사람이 되고 싶거든요. 영감도 주고, 누군가의 기억에 오래 남는 사람이요."</p>
                    <p>김보 작가의 사례처럼, 조직 문화에 적응하지 못하고 자아를 잃어가는 경험은 다른 청년들에게서도 발견된다. 식품유통업계에서 일하다 퇴사 후
                      '쉬었음' 청년을 선택한 양희연(27)씨의 이야기도 비슷하다. "의사결정이 수시로 바뀌고, 비효율적인 업무가 지속되는 상황에서 성장의 기회를
                      찾기 힘들었어요." 그는 퇴사 후 달라진 점으로 "'화'가 없어졌다"고 말한다. "얼마나 스트레스를 받고 있었는지 퇴사하고 나서야 깨달았죠."
                    </p>
                    <p>양희연씨는 '쉬는 청년'을 바라보는 사회적 시선에 대해 "언론에서는 '일할 의지가 없다', '그저 놀려고 한다'는 식으로 부정적으로 다루지만,
                      실제 주변에선 이를 개인의 문제가 아닌 사회 구조적 문제로 보는 시각이 더 많다"고 말했다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="expert-section">
            <div class="expert-container">
              <h2 class="expert-title">청년들의 '쉼'의 의미 다시 봐야</h2>
              <div class="expert-content">
                <p>이은경 명지대 청소년심리학과 교수는 "우리 사회에는 여전히 '청년이 쉬면 안 된다'는 인식이 강하고, 쉬는 청년을 실패자로 바라보는 시선이 많다"고 지적했다.
                  그러면서 "이제는 인식의 전환이 필요한 시점"이라며 "청년의 '쉼'이 가진 의미와 가치, 그리고 이를 통한 회복과 성장의 가능성을 알리는 것이 중요하다"고
                  강조했다.</p>

                <div class="expert-quote">
                  <p>"단순히 시설을 만드는 것을 넘어, 청년들이 심리적 지원을 받고 같은 경험을 가진 이들과 연대하면서 자존감을 회복할 수 있도록 돕는 것이 필요하다"
                  </p>
                </div>

                <p>현재 각 지자체는 청년센터를 통해 심리 상담과 진로 지원 프로그램을 운영하고 있다. 이 교수는 지자체의 노력이 실질적인 도움이 되기 위해서는 더 세심한 접근이
                  필요하다고 제언했다.</p>

                <div class="expert-quote">
                  <p>호주에서 1년간의 여정을 마친 남보연씨는 "'쉼'이 도전을 통한 회복"이라고 말한다. 양희연씨도 쉼을 "일보 전진을 위한 일보 후퇴"라고 정의했다.
                  </p>
                </div>

                <p>청년들의 '쉼'을 실패자의 선택이 아닌, 건강한 사회 복귀를 위한 과정으로 바라봐야 할 시점이다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    const heroSection = document.getElementById('heroSection');
    const surveySection = document.getElementById('surveySection');
    const startButton = document.getElementById('startButton');
    const lastSection = document.getElementById('lastSection');
    const restButton = document.getElementById('restButton');
    const commentsSection = document.getElementById('commentsSection');
    const commentBoxes = document.querySelectorAll('.comment-box');
    const conclusionText = document.getElementById('conclusionText');
    const pauseButton = document.getElementById('pauseButton');

    // pause 버튼 클릭 이벤트 리스너 추가
    pauseButton.addEventListener('click', () => {
      surveySection.style.display = 'flex';
      surveySection.classList.add('visible');
      startButton.style.opacity = '1';
      // 다음 섹션으로 부드럽게 스크롤
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });

      // 다음 섹션을 보여주는 로직
      if (surveySection) {
        surveySection.style.display = 'flex';
        surveySection.classList.add('visible');
      }

      setTimeout(() => {
        startButton.style.opacity = '1';
      }, 1000);
    });

    startButton.addEventListener('click', () => {
      lastSection.style.display = 'block';
      startButton.style.display = 'none';
      restButton.style.display = 'block';
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });

    restButton.addEventListener('click', () => {
      commentsSection.style.display = 'block';
      const introText = document.getElementById('introText');
      introText.classList.add('visible');

      setTimeout(() => {
        commentBoxes.forEach((box, index) => {
          setTimeout(() => {
            box.classList.add('visible');
          }, index * 500);
        });

        setTimeout(() => {
          conclusionText.classList.add('visible');
        }, commentBoxes.length * 500 + 500);
      }, 1000);
    });

    // 차트 오버레이
    const overlay = document.querySelector('.overlay');
    const overlayImg = overlay.querySelector('img');
    const chartAreas = document.querySelectorAll('.chart-area');

    chartAreas.forEach(area => {
      area.addEventListener('mouseover', () => {
        overlay.style.display = 'flex';
        overlayImg.src = area.dataset.image;
      });

      area.addEventListener('mouseout', () => {
        overlay.style.display = 'none';
      });
    });

    // IntersectionObserver 설정
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1  // 요소가 10% 화면에 들어올 때 트리거
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // 관찰 해제
        }
      });
    }, observerOptions);

    // 모든 요소를 관찰 대상으로 등록
    const sections = document.querySelectorAll(
      '.parallax-container, .full-screen-container, .image-text-container, .expert-container, .story-title, .expert-section, .articles-sequence, .article-box, .text-conclusion'
    );

    sections.forEach(section => {
      observer.observe(section);
    });

    // 스크롤 이벤트를 통한 백업 가시성 설정
    window.addEventListener('scroll', () => {
      sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight && !section.classList.contains('visible')) {
          section.classList.add('visible');
        }
      });
    });
  }
}

</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.css');

@font-face {
  font-family: 'GmarketSansMedium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}


.sejin-div {
  /* background-color: black !important; */
  font-family: 'GmarketSansMedium', sans-serif;

}

/* body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #000000;
  font-family: 'Gmarket Sans TTF', sans-serif;
  font-weight: 500;
} */

.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  padding: 0 40px;
  position: relative;
  overflow: hidden;
}

.logo-container {
  position: relative;
}

.play-icon {
  font-size: 48px;
  margin-right: 20px;
  margin-top: -10px;
}

.play-icon-left {
  position: absolute;
  left: -100px !important;
  top: 150px;
  font-size: 48px;
  z-index: 1000;
  pointer-events: none;
  color: #E09F3E;
}

.logo-text {
  font-size: 64px;
  line-height: 1.5;
  color: #fff;
}

.logo-line {
  opacity: 0;
  transform: translateX(-50px);
  animation: slideIn 0.5s ease-out forwards;
}

.logo-line:nth-child(1) {
  animation-delay: 0.2s;
}

.logo-line:nth-child(2) {
  animation-delay: 0.4s;
}

.logo-line:nth-child(3) {
  animation-delay: 0.6s;
}

.logo-line:nth-child(4) {
  animation-delay: 0.8s;
}

.pause-text {
  border: 2px solid #e09f3e;
  border-radius: 8px;
  padding: 5px 15px;
  cursor: pointer;
  /* 클릭 가능한 마우스 포인터 추가 */
  display: inline-block;
  animation: float 2s ease-in-out infinite;
  transition: background-color 0.3s ease;
  /* 클릭 시 배경색이 변하는 효과 추가 */
}

.pause-text:hover {
  background-color: #e09f3e;
  /* hover 시 배경색 변경 */
}

.title-container {
  opacity: 0;
  transform: translateX(50px);
  animation: fadeIn 0.8s ease-out 1.2s forwards;
  text-align: center;
  font-family: 'GmarketSansMedium', sans-serif;
}

.main-title {
  font-size: 48px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  font-family: 'GmarketSansMedium', sans-serif;
}

.subtitle {
  font-size: 80px;
  background: linear-gradient(180deg, #E09F3E 0%, rgba(224, 159, 62, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'GmarketSansMedium', sans-serif;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.comments-section {
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  display: none;
  padding: 50px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.comments-container {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 50px;
  position: relative;
  z-index: 1001;
}

.comment-box {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
  position: relative;
  z-index: 1002;
}

.comment-box img {
  width: 100%;
  display: block;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.comment-box.visible {
  opacity: 1;
  transform: translateY(0);
}

.survey-section {
  display: none;
  padding: 100px 0;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-out;
}

.survey-section.visible {
  opacity: 1;
  transform: translateY(0);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.survey-content {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.survey-content img {
  width: 100%;
  display: block;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

#startButton {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 200px;
  cursor: pointer;
  animation: float 2s ease-in-out infinite;
  z-index: 100;
  opacity: 0;
  transition: opacity 0.5s ease;
}

#lastSection {
  display: none;
  width: 800px;
  margin: 0 auto;
  position: relative;
}

#lastSection img {
  width: 100%;
  display: block;
}

#restButton {
  position: fixed;
  bottom: 130px;
  right: 600px;
  padding: 20px 35px;
  background: #E09F3E;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 20px;
  cursor: pointer;
  animation: float 2s ease-in-out infinite;
  z-index: 1003;
  display: none;
}

/* 기존 스타일에 추가할 부분 */
#intro-text {
  width: 800px;
  margin: 0 auto 40px auto;
  padding: 40px;
  background: linear-gradient(180deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%);
  border-radius: 12px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
  font-family: 'GmarketSansMedium', sans-serif;
}

.intro-text.visible {
  opacity: 1;
  transform: translateY(0);
}

.intro-text p {
  color: #ffffff;
  font-family: 'Gmarket Sans TTF';
  font-size: 16px;
  line-height: 1.8;
  margin: 0 0 15px 0;
  font-family: 'GmarketSansMedium', sans-serif;
}

.intro-text .editor-note {
  color: #E09F3E;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'GmarketSansMedium', sans-serif;
}

/* comments-section 스타일 수정 */
.comments-container {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 20px;
}

.comment-box {
  margin-bottom: 20px;
}

.conclusion-text {
  width: 750px;
  margin: 40px auto;
  padding: 40px;
  background: linear-gradient(180deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'GmarketSansMedium', sans-serif;
  /* 추가 */
}

.conclusion-text p {
  color: #ffffff;
  font-family: 'Gmarket Sans TTF';
  font-size: 16px;
  line-height: 1.8;
  margin: 0 0 15px 0;
  font-family: 'GmarketSansMedium', sans-serif;
}

.conclusion-text p:last-child {
  margin-bottom: 0;
}

/* 스크롤을 위한 스타일 수정 */
.comments-section {
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  display: none;
  padding: 50px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow-y: auto;
  max-height: 100vh;
}


.chart-container {
  position: relative;
  width: 100vw;
  /* 뷰포트 너비만큼 설정 */
  margin: 40px 0;
  /* 상하 마진만 유지 */
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.chart {
  width: 110%;
  /* 너비를 약간 늘립니다 */
  height: auto;
  display: block;
  margin-left: -5%;
  /* 왼쪽으로 약간 이동시킵니다 */

}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  justify-content: center;
  align-items: center;
}

.overlay img {
  max-width: 40%;
  max-height: 40%;
}

.chart-area {
  position: absolute;
  cursor: pointer;
}

.articles-sequence {
  width: 800px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.article-box {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.article-box.visible {
  opacity: 1;
  transform: translateY(0);
}

.sequence-article {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.articles-sequence {
  width: 800px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.article-box {
  opacity: 0;
  /* 각 이미지 박스를 처음에는 숨김 */
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.article-box.visible {
  opacity: 1;
  /* visible 클래스가 추가되면 이미지가 나타남 */
  transform: translateY(0);
}

.sequence-article {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.text-conclusion {
  width: 800px;
  margin: 60px auto;
  padding: 40px;
  background: linear-gradient(180deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%);
  border-radius: 12px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
  font-family: 'GmarketSansMedium', sans-serif;
}

.text-conclusion.visible {
  opacity: 1;
  transform: translateY(0);
}

.text-conclusion p {
  color: #ffffff;
  font-family: 'Gmarket Sans TTF';
  font-size: 16px;
  line-height: 1.8;
  margin: 0 0 15px 0;
}

.text-conclusion p:last-child {
  margin-bottom: 0;
}

.highlight {
  background: linear-gradient(transparent 0%, rgba(255, 255, 0, 0.4) 0%);
  padding: 0 2px;
}

.story-section {
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.story-title {
  width: 800px;
  margin: 40px auto;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
  font-family: 'GmarketSansMedium', sans-serif;
}

.story-title.visible {
  opacity: 1;
  transform: translateY(0);
  font-family: 'GmarketSansMedium', sans-serif;
}

.story-title h2 {
  color: #ffffff;
  font-family: 'Gmarket Sans TTF';
  font-size: 32px;
  text-align: center;
  margin: 0;
  font-family: 'GmarketSansMedium', sans-serif;
}

.parallax-container {
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 1s ease-out;
  font-family: 'GmarketSansMedium', sans-serif;
}

.parallax-container.visible {
  opacity: 1;
}

.text-overlay {
  width: 800px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 12px;
  /* opacity: 0; */
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.text-overlay.visible {
  opacity: 1;
  transform: translateY(0);
}

.text-overlay p {
  color: #ffffff;
  font-family: 'Gmarket Sans TTF';
  font-size: 16px;
  line-height: 1.8;
  margin: 0 0 15px 0;
}

.text-overlay p:last-child {
  margin-bottom: 0;
}

.text-overlay.quote {
  border-left: 4px solid #E09F3E;
  padding-left: 34px;
}

.quote-text {
  color: #E09F3E !important;
  font-style: italic;
}

.image-text-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #000000;
  opacity: 0;
  transition: opacity 1s ease-out;
  padding: 40px 0;
}

.image-text-container.visible {
  opacity: 1;
}

.image-section {
  flex: 1;
  padding: 20px;
  position: relative;
}

.image-section img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.image-caption {
  color: #888;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
  font-family: 'Gmarket Sans TTF';
}

.text-section {
  flex: 1;
  padding: 40px;
}

.text-content {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 12px;
  color: #ffffff;
  font-family: 'Gmarket Sans TTF';
  font-size: 16px;
  line-height: 1.8;
}

.full-screen-container {
  width: 100vw;
  /* 100vw로 변경 */
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  opacity: 0;
  transition: opacity 1s ease-out;
  padding: 0;
  margin: 0;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.text-box {
  width: 800px;
  max-width: 90%;
  /* 추가 */
  background-color: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 12px;
  /* opacity: 0; */
  transform: translateY(20px);
  transition: all 0.8s ease-out;
  margin: 0 auto;
  /* 추가 */
}

.full-screen-container.visible {
  opacity: 1;
}

.text-box.visible {
  opacity: 1;
  transform: translateY(0);
}

.text-box p {
  color: #ffffff;
  font-family: 'Gmarket Sans TTF';
  font-size: 16px;
  line-height: 1.8;
  margin: 0;
}

.text-box.quote {
  border-left: 4px solid #E09F3E;
  padding-left: 34px;
}

.expert-section {
  width: 100%;
  background-color: #000000;
  padding: 80px 0;
  margin: 0;
}

.expert-container {
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.expert-title {
  color: #ffffff;
  font-family: 'Gmarket Sans TTF';
  font-size: 32px;
  text-align: center;
  /* opacity: 0; */
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.expert-title.visible {
  opacity: 1;
  transform: translateY(0);
}

.expert-content {
  background: linear-gradient(180deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%);
  border-radius: 12px;
  padding: 40px;
  /* opacity: 0; */
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.expert-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.expert-quote {
  background: rgba(224, 159, 62, 0.1);
  border-left: 4px solid #E09F3E;
  padding: 30px;
  padding-left: 34px;
  border-radius: 12px;
  margin: 30px 0;
  font-style: italic;
}

.expert-content p {
  color: #ffffff;
  font-family: 'Gmarket Sans TTF';
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 15px;
}

.expert-content p:last-child {
  margin-bottom: 0;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>