<template>
    <div class="editors-note" onclick="showNewsContent('news-editor')">
        <h1>대체재와 보완재 경계...AI의 대비책은?</h1>
        <p><strong>- ChatGPT의 2년</strong><br>
            <strong>- Ai를 둘러싼 '낙관주의'와 '비관주의'</strong><br>
            <strong>- AI 기술, 우리의 직업을 어떻게 변화시킬 것인가</strong><br>
            <strong>- 빠르게 변하는 세상, 이제는 대비가 필수</strong><br>
        </p>
        <p>지난 11월 30일, ChatGPT 출시 2주년을 맞이했다. 이제 AI는 단순히 미리 입력된 답변을 제공하는 챗봇을 넘어, 학습된 데이터를 바탕으로 새로운 문장을 생성하는
            고도화된 기술로 자리 잡았다. 이로 인해 직업의 종말에 대한 우려가 현실화되고 있으며, AI 기술의 급속한 발전이 가져온 충격은 상당하다.</p>

        <p>AI 기술이 다양한 분야에서 빠르게 확산됨에 따라 인간의 직무 대체에 대한 대비가 더욱 중요해지고 있다. 지난 1년 동안 급진적으로 발전한 AI는 많은 직무에 영향을 미쳤으며, 이에
            따라 우리는 이러한 변화에 얼마나 준비되어 있는지를 되돌아볼 필요가 있다.</p>

        <p>직무 대체에 따른 대응책 마련은 이제 선택이 아닌 필수다. 사회적 안전망 구축, 기술 재교육, 직무 전환 지원 등 AI의 영향을 줄이기 위한 다양한 방안이 필요하다. 전문가들은
            변화의 속도를 감안할 때 개인과 기업, 그리고 정부 차원에서 AI로 인한 일자리 변화에 대한 적극적인 대응이 필요하다고 강조하고 있다.</p>

        <p>앞으로 다가올 AI 시대를 맞아, 직업과 기술의 변화에 어떻게 적응할 것인지, 그리고 이를 위해 어떠한 준비가 필요한지를 논의하며 미래를 준비해야 할 시점이다.</p>

    </div>

    <!-- 타임라인 섹션 -->
    <div class="timeline-title">챗gpt의 2년</div>

    <div class="timeline">
        <!-- 타임라인 항목 1 -->
        <div class="timeline-item" onclick="showNewsContent('news1')">
            <div class="timeline-content">
                <div class="timeline-date">2022년 11월 30일</div>
                <div><a>오픈AI, 생성형 인공지능 챗봇 ChatGPT 출시 🎉</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 2 -->
        <div class="timeline-item" onclick="showNewsContent('news2')">
            <div class="timeline-content">
                <div class="timeline-date">2023년 3월 14일</div>
                <div><a>오픈AI, 사진 등 이미지 해석 가능한 ChatGPT 출시 📸</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 3 -->
        <div class="timeline-item" onclick="showNewsContent('news3')">
            <div class="timeline-content">
                <div class="timeline-date">2023년 3월 29일</div>
                <div><a>비영리기구 '퓨처 오브 라이프', “고강도 AI 개발 6개월 중단” 성명 📢</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 4 -->
        <div class="timeline-item" onclick="showNewsContent('news4')">
            <div class="timeline-content">
                <div class="timeline-date">2023년 4월</div>
                <div><a>WEF, '일자리의 미래 2023' 보고서 발표 📊</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 5 -->
        <div class="timeline-item" onclick="showNewsContent('news5')">
            <div class="timeline-content">
                <div class="timeline-date">2023년 3월 31일</div>
                <div><a>이탈리아, ‘개인정보 보호 우려’ 등 이유로 ChatGPT 접속 일시 차단 🇮🇹</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 6 -->
        <div class="timeline-item" onclick="showNewsContent('news6')">
            <div class="timeline-content">
                <div class="timeline-date">2023년 5월 2일</div>
                <div><a>삼성전자, ‘정보 유출 우려’로 ChatGPT 등 생성형 AI 사용 제한 🏢</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 7 -->
        <div class="timeline-item" onclick="showNewsContent('news7')">
            <div class="timeline-content">
                <div class="timeline-date">2023년 5월 30일</div>
                <div><a>비영리 기구 ‘센터 포 AI 세이프티’, “AI로 인한 멸종 위험 줄여야” 성명 🌍</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 8 -->
        <div class="timeline-item" onclick="showNewsContent('news8')">
            <div class="timeline-content">
                <div class="timeline-date">2023년 6월 12일</div>
                <div><a>안토니우 구테흐스 유엔 사무총장, AI 규제법 초안 의결 📝</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 9 -->
        <div class="timeline-item" onclick="showNewsContent('news9')">
            <div class="timeline-content">
                <div class="timeline-date">2023년 6월 21일</div>
                <div><a>윤 대통령, ChatGPT 언급하며 “디지털 질서 규범 제정 위한 국제기구 설치 제안” 🇰🇷</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 10 -->
        <div class="timeline-item" onclick="showNewsContent('news10')">
            <div class="timeline-content">
                <div class="timeline-date">2023년 6월 28일</div>
                <div><a>미국 로펌 클락슨, 오픈AI 상대 저작권 및 프라이버시 침해 소송 제기 ⚖️</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 11 -->
        <div class="timeline-item" onclick="showNewsContent('news11')">
            <div class="timeline-content">
                <div class="timeline-date">2023년 7월 26일</div>
                <div><a>한국 개인정보보호위원회, 오픈AI에 ‘개인정보 유출 사고’과태료 처분 🇰🇷</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 12 -->
        <div class="timeline-item" onclick="showNewsContent('news12')">
            <div class="timeline-content">
                <div class="timeline-date">2023년 9월 25일</div>
                <div><a>오픈AI, 대화 가능한 ChatGPT 제공 계획 발표 💬</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 13 -->
        <div class="timeline-item" onclick="showNewsContent('news13')">
            <div class="timeline-content">
                <div class="timeline-date">2023년 11월 17일</div>
                <div><a>오픈AI, 샘 올트먼 해임 발표 🛑</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 14 -->
        <div class="timeline-item" onclick="showNewsContent('news14')">
            <div class="timeline-content">
                <div class="timeline-date">2023년 11월 21일</div>
                <div><a>오픈AI, 샘 올트먼 복귀 발표 🔄</a></div>
            </div>
        </div>

        <!-- 타임라인 항목 15 -->
        <div class="timeline-item" onclick="showNewsContent('news15')">
            <div class="timeline-content">
                <div class="timeline-date">2024년 5월 23일</div>
                <div><a>이재명 더불어민주당 대표, “기본소득은 인공지능 시대에 피할 수 없는 제도” 💰</a></div>
            </div>
        </div>
    </div>

    <!-- 카드뉴스 섹션 (타임라인 아래로 이동) -->
    <div class="additional-content">
        <!-- 캡쳐 형식 -->
        <div class="screenshot" onclick="showNewsContent('news19')">
            <strong>
                <p>AI, 판사·교수도 대체... 내 일자리가 사라진다</p>
            </strong>

            <p><strong>AI가 바꾸는 일자리 지도… 전문가 직종에 닥친 위험</strong></p>
            <p>인공지능(AI)의 급속한 발전이 가져올 일자리 변화가 현실로 다가오고 있다. 최근 산업연구원 보고서에 따르면 한국에서 AI가 대체할 가능성이 높은 일자리가 전체 일자리의
                13% 수준인 327만 개에 이를 전망이다. 특히 대체 위험은 전문가 직종에 집중되면서, 고도 기술을 요하는 전문직 일자리 소멸 우려가 커지고 있다.</p>

            <p>산업연구원은 13일 ‘AI 시대 본격화에 대비한 산업인력양성 과제’ 보고서를 통해 이 같은 내용을 발표했다. 보고서에 따르면 2022년 기준으로 국내 기업의 AI 도입률은
                4% 수준에 불과했지만, 생성형 AI의 급성장과 기술 향상을 고려할 때 ‘AI 시대’의 도래가 빨라질 것으로 예상된다.</p>

            <p>특히 ‘AI 노출지수’를 활용한 미래 일자리 분석 결과에 따르면 전체 일자리의 13.1%에 해당하는 327만 개가 AI로 인해 사라질 위험이 높은 것으로 나타났다. 산업별로는
                제조업이 93만 개로 가장 많았고, 이어 건설업(51만 개), 전문·과학·기술서비스업(46만 개), 정보통신업(41만 개) 순으로 AI 대체 가능성이 높은 일자리가 많았다.
            </p>

            <p>직종별로는 AI 대체 가능 일자리의 59.9%에 해당하는 196만 개가 전문가 직종에 집중된 것으로 나타났다. 구체적으로 공학 전문가와 정보통신 전문가 비중이 높은
                전문·과학·기술서비스업(45만 개)과 정보통신업(38만 개)뿐만 아니라 건설업(43만 개), 제조업(37만 개) 내에서도 전문직 일자리에 대한 대체 위험이 가장 클 것으로
                추정됐다.</p>

            <p>특히 금융업의 경우 AI 대체 위험이 거의 전적으로 경영·금융 전문가에 몰려 있어, 일자리 소멸 위험군의 99.1%가 이 직종에 속해 있는 것으로 나타났다.</p>

            <p>송단비 산업연구원 부연구위원은 “AI의 노동 대체 양상은 과거 로봇이 생산직을 대체한 것과는 매우 다르게 나타날 것으로 예상된다”며 “AI가 이미 석·박사급 개발 인력을
                중심으로 실질적인 노동수요 변화를 유발하고 있다”고 분석했다.</p>

            <p>보고서는 AI 도입 초기에는 AI 활용에 따른 고용 대체 효과보다 AI 도입을 위한 개발 인력 수요에 대응하는 것이 더 시급하며, 이에 따라 한국은 AI 관련 고학력 및 전문
                연구개발 인재 육성이 당면 과제임을 강조했다.</p>
        </div>

        <!-- 카드뉴스 형식 -->
        <h3 class="h3">AI 시대의 노동시장은 끊임없는 변화와 적응을 요구한다</h3>
        <div class="card-news">
            <div class="card" data-modal="news17">
                <img src="https://imgur.com/ibZhafM.jpg" alt="변화와 적응">
                <h4>변화와 적응</h4>
                <p>AI 시대의 노동시장은 끊임없는 변화와 적응을 요구합니다. 단순 반복적인 업무는 AI에 맡기고, 인간은 더욱 창조적이고 가치 있는 일에 집중해야 합니다.</p>
            </div>
            <!-- 필요한 건 어쩌면 '철학' 카드 -->
            <div class="card" data-modal="news18">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160414_30%2Fleekyung21c_1460617075584R68D2_JPEG%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5.jpg&type=a340"
                    alt="필요한 건 철학">
                <h4>필요한 건 어쩌면 '철학’ :클래퍼:</h4>
                <p>어떤 미래가 펼쳐질지 아무도 예단할 수 없는 상황에서 인간의 고민은 어쩌면 철학적인 것이 되어야 할지도 모릅니다.</p>
            </div>
            <!-- 제도적 변화 카드 -->
            <div class="card" data-modal="news20">
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MzBfMTEw%2FMDAxNjIyMzMzNTU2ODc1.WOl9S_rEZKKZMFjI0F4Q01VeYKGSfBU-xMZOH1k7NAwg.oTeGojow80j_GwISCHMVn5mYOh-VCYgYOAxMTZ_OXcsg.PNG.jinzao77%2F02.png&type=a340"
                    alt="제도적 변화">
                <h4>제도적 변화</h4>
                <p>기본소득...Ai 대체 일자리 사회 안전망으로 떠올라</p>
            </div>
        </div>
    </div>


    <!-- 신문 형식의 팝업 모달들 -->
    <!-- 뉴스 1부터 뉴스20까지 -->
    <!-- 뉴스 1 -->
    <div class="modal" id="news1">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news1')"></span>
            <header class="modal-header">
                <div class="issue-number">01/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2022년 11월 30일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">오픈AI, 생성형 인공지능 챗봇 ChatGPT 출시 🎉</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>생성형 AI 시대의 시작… 오픈AI, ChatGPT 공개</strong></p>
                        <p>오픈AI가 새롭게 선보인 생성형 인공지능 챗봇 ChatGPT가 AI 기술의 새로운 가능성을 제시하며 화제를 모으고 있다. 자연스러운 대화와 다양한 질문에 대한 답변을
                            제공하는 이 AI는 창의적인 글쓰기와 아이디어 생성 지원 등 여러 방면에서 활용될 것으로 기대된다.</p>

                        <p>2022년 11월 30일 오픈AI는 ChatGPT를 출시했다. 이 챗봇은 학습한 데이터를 기반으로 사용자의 질문에 답변을 제공하고, 인간과 유사한 대화를 이어갈 수
                            있도록 설계되었다. 이를 통해 사용자들은 ChatGPT를 활용하여 보다 창의적이고 실질적인 도움을 얻을 수 있게 되었다.</p>

                        <p>ChatGPT의 등장은 AI 기술이 단순한 자동화 수준을 넘어 창의성과 문제 해결력을 지원할 수 있는 수준에 도달했음을 보여준다. 기업과 개인 사용자들 사이에서
                            ChatGPT에 대한 관심이 급증하고 있으며, 교육, 마케팅, 고객 서비스 등 다양한 분야에서 활용 가능성이 주목받고 있다.</p>

                        <p>오픈AI는 "ChatGPT가 대화형 AI의 새로운 장을 열며, 사용자와 AI 간의 상호작용 방식을 혁신할 것"이라고 밝혔다. AI가 단순한 도구에서 한 단계 더 나아가
                            창의적 작업까지 지원할 수 있는 시대가 시작되었음을 알리는 ChatGPT의 출시는 인공지능 기술의 발전 속도를 실감하게 하는 계기가 되고 있다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 뉴스 2 -->
    <div class="modal" id="news2">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news2')"></span>
            <header class="modal-header">
                <div class="issue-number">02/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2023년 3월 14일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">오픈AI, 사진 등 이미지 해석 가능한 ChatGPT 출시 📸</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>오픈AI, ChatGPT에 이미지 해석 기능 추가… AI 활용 폭 넓힌다</strong></p>
                        <p>오픈AI가 인공지능 챗봇 ChatGPT에 이미지 해석 기능을 추가하며 AI 활용의 새로운 지평을 열었다. 사용자는 이제 이미지를 업로드하여 AI가 해당 이미지에 대한
                            설명과 관련 정보를 제공받을 수 있어, 교육, 연구, 비즈니스 등 다양한 분야에서 활용도가 더욱 확대될 전망이다.</p>

                        <p>2023년 3월 14일, 오픈AI는 ChatGPT에 이미지 해석 기능을 추가한 버전을 출시했다. 이 새로운 기능을 통해 사용자는 단순한 텍스트 입력을 넘어 이미지를
                            기반으로도 AI의 설명을 받을 수 있게 되었으며, 이는 기존 텍스트 기반의 대화형 AI의 한계를 뛰어넘는 중요한 발전이다.</p>

                        <p>오픈AI는 “ChatGPT의 이미지 해석 기능은 교육과 연구, 그리고 비즈니스 현장에서 효과적으로 사용될 것”이라고 전했다. 이 기능을 통해 학생과 연구자는 이미지
                            자료에 대한 분석을 즉시 받아볼 수 있고, 기업들은 제품 이미지나 시각적 데이터에 대한 분석을 통해 비즈니스 전략을 보완할 수 있게 된다.</p>

                        <p>ChatGPT에 추가된 이미지 해석 기능은 AI의 활용 범위를 크게 확장하며, 인공지능 기술이 사용자와 상호작용하는 방식에 새로운 변화를 예고하고 있다. 오픈AI는
                            이번 업데이트가 AI의 접근성과 효용성을 높이는 중요한 발걸음이 될 것이라고 강조했다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 뉴스 3 -->
    <div class="modal" id="news3">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news3')"></span>
            <header class="modal-header">
                <div class="issue-number">03/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2023년 3월 29일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">비영리기구 '퓨처 오브 라이프', “고강도 AI 개발 6개월 중단” 성명 📢</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>“고강도 AI 개발 6개월 중단” 비영리기구 퓨처 오브 라이프, AI 속도 조절 촉구</strong></p>
                        <p>AI 기술의 급속한 발전에 대한 우려가 커지면서 비영리기구 ‘퓨처 오브 라이프’가 고강도 AI 개발의 일시 중단을 요구하고 나섰다. AI 기술이 가져올 수 있는
                            사회적, 경제적, 윤리적 영향에 대한 충분한 논의가 필요하다는 입장에서, 이 기구는 AI 개발 방향성을 재검토하고 안전한 AI 개발을 위해 글로벌 차원의 협력이
                            필요하다고 주장하고 있다.</p>

                        <p>2023년 3월 29일, 퓨처 오브 라이프는 “고강도 AI 개발을 6개월간 중단하자”라는 성명을 발표했다. 이번 성명은 AI의 빠른 발전이 자칫 부정적인 결과를 초래할
                            수 있다는 경고의 의미를 담고 있으며, AI가 미칠 잠재적인 영향을 깊이 있게 분석하고 대비할 시간이 필요하다는 입장이다.</p>

                        <p>퓨처 오브 라이프는 AI 개발 속도가 윤리적, 사회적 기준을 넘어서기 전에 AI 기술의 안전성을 확보하는 것이 중요하다고 강조했다. 이와 함께 AI 기술이 인류와
                            공존할 수 있는 방향으로 나아가기 위해 각국이 협력해야 한다는 메시지를 덧붙였다.</p>

                        <p>이 성명은 전 세계 AI 개발 기업과 관련 기관들이 AI의 미래를 보다 신중히 고려하는 계기가 될 것으로 예상된다. AI 개발의 속도와 방향에 대한 글로벌 공감대가
                            형성될지 귀추가 주목된다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 뉴스 4 -->
    <div class="modal" id="news4">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news4')"></span>
            <header class="modal-header">
                <div class="issue-number">04/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2023년 4월</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">WEF, '일자리의 미래 2023' 보고서 발표 📊</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">

                        <p><strong>“AI가 대체할 일자리, 전체의 13%… 전문가 직종에 큰 타격 예상”</strong></p>
                        <p>AI 시대가 빠르게 도래하면서 국내 일자리의 약 13%가 AI로 인해 대체될 가능성이 있다는 전망이 나왔다. 특히 고도의 전문성을 요구하는 직종들이 AI의 대체
                            대상으로 집중되고 있어, 향후 전문가 직종에 큰 타격이 예상된다. 산업연구원은 최근 보고서를 통해 AI 대체가 예상되는 일자리의 60%가 전문직군에 속해 있어 해당
                            분야의 심각한 변화가 불가피하다고 분석했다.</p>

                        <p>산업연구원이 13일 발표한 ‘AI 시대 본격화에 대비한 산업인력 양성 과제’ 보고서에 따르면, 2022년 기준 국내 기업의 AI 도입률은 4%에 불과하지만,
                            ChatGPT 등 생성형 AI의 등장과 AI 성능의 빠른 향상을 고려할 때 ‘AI 시대’의 도래가 가속화될 것으로 예상된다.</p>

                        <p>보고서는 ‘AI 노출지수’를 활용하여 미래 일자리에 미칠 영향을 분석한 결과, 전체 일자리의 13.1%에 해당하는 327만 개의 일자리가 AI로 인해 소멸할 가능성이
                            큰 것으로 조사됐다. 산업별로는 제조업이 93만 개로 가장 많았고, 건설업(51만 개), 전문·과학·기술서비스업(46만 개), 정보통신업(41만 개) 순으로 AI
                            대체 가능성이 높은 것으로 나타났다.</p>

                        <p>직종별로는 AI 대체 가능성이 있는 일자리의 59.9%에 해당하는 196만 개가 전문가 직종에 집중된 것으로 분석됐다. 특히 공학 및 정보통신 전문가가 많은
                            전문·과학·기술서비스업(45만 개)과 정보통신업(38만 개) 외에도 건설업(43만 개), 제조업(37만 개) 분야에서도 전문직 일자리에 대한 AI 대체 위험이 큰
                            것으로 나타났다. 금융업의 경우, 일자리 소멸 위험군의 99.1%가 경영·금융 전문가에 집중되어 있어 타격이 예상된다.</p>

                        <p>산업연구원의 송단비 부연구위원은 “AI의 노동 대체는 과거 로봇이 생산직 일자리를 대체한 것과는 다르게, 석·박사급 개발 인력을 중심으로 실질적인 노동 수요 변화를
                            일으키고 있다”고 설명했다.</p>

                        <p>보고서는 AI 도입 초기에는 AI로 인한 고용 대체보다 AI 개발에 필요한 인력 수요 대응이 더 시급하며, 이에 따라 한국은 AI 관련 고학력 및 전문 연구개발 인재
                            양성이 중요한 과제로 떠오르고 있다고 강조했다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 뉴스 5 -->
    <div class="modal" id="news5">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news5')"></span>
            <header class="modal-header">
                <div class="issue-number">05/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2023년 3월 31일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">이탈리아, ‘개인정보 보호 우려’ 등 이유로 ChatGPT 접속 일시 차단 🇮🇹</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>이탈리아, 개인정보 보호 우려로 ChatGPT 일시 차단… 유럽 내 규제 확대 신호?</strong></p>
                        <p>이탈리아 정부가 개인정보 보호 문제를 이유로 ChatGPT의 접속을 일시적으로 차단했다. 사용자 데이터의 안전한 관리에 대한 우려에서 비롯된 이번 조치는 유럽 내 다른
                            국가들에서도 유사한 규제가 이어질 가능성을 시사하고 있어 주목받고 있다.</p>

                        <p>2023년 3월 31일, 이탈리아 정부는 개인정보 보호 우려와 관련해 ChatGPT의 접속을 차단했다. 이는 인공지능 기술이 빠르게 확산되는 가운데 사용자 데이터가
                            충분히 보호되지 않을 수 있다는 문제 제기로, 정부는 ChatGPT와 같은 생성형 AI의 데이터 관리 방식에 경고의 메시지를 던진 것이다.</p>

                        <p>오픈AI는 이탈리아 정부의 조치에 대해 "사용자 데이터 보호를 위해 적극적으로 대응하고, 정책을 개선해 나가겠다"는 입장을 밝혔다. 오픈AI는 해당 문제를 해결하기
                            위한 조치와 함께, ChatGPT의 개인정보 보호에 대한 우려를 해소하겠다고 덧붙였다.</p>

                        <p>이탈리아의 이번 결정은 유럽 내 다른 국가에서도 AI의 개인정보 보호 규제를 강화하려는 움직임에 영향을 미칠 가능성이 있다. 전문가들은 “AI가 급속도로 발전하고 있는
                            가운데 개인정보 보호와 관련한 규제의 필요성이 더욱 강조될 것”이라며, 이번 조치가 유럽 전역에 미칠 파급 효과에 주목하고 있다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 뉴스 6 -->
    <div class="modal" id="news6">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news6')"></span>
            <header class="modal-header">
                <div class="issue-number">06/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2023년 5월 2일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">삼성전자, ‘정보 유출 우려’로 ChatGPT 등 생성형 AI 사용 제한 🏢</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>삼성전자, 정보 유출 우려로 ChatGPT 사용 제한… 기업 보안 강화 조치</strong></p>
                        <p>삼성전자가 정보 유출에 대한 우려로 ChatGPT를 포함한 생성형 AI의 사용을 제한하기로 결정했다. 이는 기업 내부의 민감한 정보가 AI 시스템을 통해 외부로 유출될
                            가능성을 차단하기 위한 조치로, 삼성전자는 보안 정책을 강화하고 직원 교육을 통해 대응을 철저히 할 계획이다.</p>

                        <p>2023년 5월 2일, 삼성전자는 ChatGPT 등 생성형 AI의 사용을 제한하는 새로운 정책을 발표했다. 이 결정은 생성형 AI 시스템을 사용하는 과정에서 기업의
                            중요 데이터가 외부로 유출될 수 있다는 위험을 인지하고, 이를 예방하기 위한 차원에서 이루어졌다.</p>

                        <p>삼성전자는 이번 조치와 함께 보안 정책을 더욱 강화하고, 직원들에게 AI 사용 시 주의해야 할 사항을 철저히 교육할 예정이다. 특히 생성형 AI가 데이터 입력 과정에서
                            정보를 학습하는 특성을 고려해, 민감한 정보를 보호할 수 있는 내부 관리 체계를 강화할 방침이다.</p>

                        <p>기업 내에서 생성형 AI 사용이 증가함에 따라 보안과 관련된 우려가 커지고 있으며, 삼성전자의 이번 결정은 AI 도입과 활용에 신중함이 필요하다는 점을 보여주는 사례로
                            주목받고 있다. 앞으로 다른 대기업들도 유사한 보안 강화 조치를 시행할 가능성이 있는 가운데, AI 사용과 데이터 보호의 균형을 맞추기 위한 기업들의 대응이 더욱
                            중요해질 전망이다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 뉴스 7 -->
    <div class="modal" id="news7">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news7')"></span>
            <header class="modal-header">
                <div class="issue-number">07/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2023년 5월 30일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">비영리 기구 ‘센터 포 AI 세이프티’, “AI로 인한 멸종 위험 줄여야” 성명 🌍</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>“AI로 인한 멸종 위험 줄여야”… 센터 포 AI 세이프티, 국제적 규제 촉구</strong></p>
                        <p>AI 기술의 무분별한 발전이 인류와 생태계에 치명적인 영향을 미칠 수 있다는 경고가 나왔다. 비영리 기구 ‘센터 포 AI 세이프티’는 AI로 인한 멸종 위험을 줄이기
                            위해 국제적인 규제와 윤리적 기준 마련이 시급하다고 강조하며, AI 개발 속도에 대한 재고를 촉구했다.</p>

                        <p>2023년 5월 30일, 센터 포 AI 세이프티는 “AI로 인한 멸종 위험을 줄여야 한다”는 성명을 발표했다. 이 성명은 AI 기술이 빠르게 발전하면서 인류와 환경에
                            미칠 수 있는 잠재적 위협을 깊이 있게 다뤄야 한다는 필요성에서 비롯된 것이다. 성명서는 AI 개발에 대한 규제가 없는 상황이 계속될 경우, 통제되지 않은 AI
                            발전이 예상치 못한 부정적 결과를 초래할 수 있다고 경고했다.</p>

                        <p>센터 포 AI 세이프티는 “인류와 생태계를 보호하기 위해 각국은 AI 개발의 윤리적 기준을 마련하고, 국제적인 규제 체계를 구축해야 한다”고 주장하며, AI 기술이
                            인간과 환경에 미치는 영향을 관리할 수 있는 제도적 장치를 마련할 것을 요청했다.</p>

                        <p>이번 성명 발표는 전 세계 AI 개발자와 규제 기관에 AI의 위험성을 고려한 책임 있는 개발을 촉구하는 의미로, 앞으로 AI 규제에 관한 국제 사회의 논의가 어떻게
                            진전될지 관심이 모아지고 있다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 뉴스 8 -->
    <div class="modal" id="news8">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news8')"></span>
            <header class="modal-header">
                <div class="issue-number">08/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2023년 6월 12일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">안토니우 구테흐스 유엔 사무총장, AI 규제법 초안 의결 📝</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>유엔, AI 규제법 초안 의결… 윤리적 사용과 투명성 확보 강조</strong></p>
                        <p>AI 기술의 급속한 발전 속에서 그 윤리적 사용과 개인정보 보호, 투명성 확보가 더욱 중요한 과제로 떠오르고 있다. 이에 따라 안토니우 구테흐스 유엔 사무총장은 AI
                            규제법 초안을 의결하며, 국제적인 AI 규제의 필요성을 강력히 주장했다. 구테흐스 총장은 AI가 인류에 미칠 영향을 고려할 때, 규제 마련이 필수적이라는 점을
                            강조했다.</p>

                        <p>2023년 6월 12일, 구테흐스 유엔 사무총장은 AI의 책임 있는 사용을 촉구하는 내용이 담긴 AI 규제법 초안을 공식적으로 의결했다. 이번 초안에는 AI의 윤리적
                            사용을 보장하고 개인정보 보호를 강화하며, AI 시스템의 투명성을 확보하기 위한 다양한 조치가 포함되었다. 이는 AI 기술이 인간 생활에 미칠 수 있는 긍정적 영향뿐
                            아니라, 그에 따른 위험도 함께 관리해야 한다는 인식을 반영한 것이다.</p>

                        <p>구테흐스 사무총장은 “AI 기술이 인류에게 미치는 영향력을 감안할 때, 국제적인 규제가 필수적이다”라고 말하며 AI 규제에 대한 유엔의 적극적인 역할을 강조했다. 그는
                            AI 기술이 발전함에 따라 각국이 협력하여 글로벌 규제 프레임워크를 구축해야 한다고 덧붙였다.</p>

                        <p>이번 규제법 초안 의결은 AI 기술의 윤리적 기준을 수립하려는 국제 사회의 중요한 움직임으로 평가되고 있으며, AI의 책임 있는 사용을 보장하기 위한 글로벌 규제
                            논의에 탄력을 줄 것으로 기대된다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 뉴스 9 -->
    <div class="modal" id="news9">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news9')"></span>
            <header class="modal-header">
                <div class="issue-number">09/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2023년 6월 21일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">윤 대통령, ChatGPT 언급하며 “디지털 질서 규범 제정 위한 국제기구 설치 제안” 🇰🇷</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>윤 대통령, “디지털 질서 규범 제정을 위한 국제기구 설치” 제안… AI 윤리 강화 필요성 강조</strong></p>
                        <p>AI 기술의 급속한 발전에 따른 윤리적 문제와 사회적 영향을 고려하여 윤석열 대통령이 디지털 질서 규범을 제정할 국제기구 설립을 제안했다. 윤 대통령은 국제적 협력을
                            통해 AI 기술의 윤리적 사용을 보장하고, 이를 관리하기 위한 체계적인 노력이 필요하다고 강조했다.</p>

                        <p>2023년 6월 21일, 윤 대통령은 연설 중 생성형 AI인 ChatGPT를 언급하며 “디지털 질서 규범 제정을 위한 국제기구 설치를 제안한다”고 밝혔다. 이는 AI
                            기술이 인간의 삶에 미치는 다양한 영향을 심도 있게 분석하고, AI의 책임 있는 사용을 위한 국제적 협력을 강화하자는 취지에서 비롯된 제안이다.</p>

                        <p>윤 대통령은 AI 기술이 급속도로 발전하면서 우리의 일상과 사회 전반에 미치는 영향이 점점 커지고 있다는 점을 지적하며, 이를 관리하고 규제할 수 있는 체계적 노력이
                            필수적이라고 강조했다. 그는 “AI가 우리의 삶에 미치는 영향을 면밀히 분석하고, 그로 인한 윤리적 문제를 해결하기 위해 국가 간 협력의 틀을 만들어야 한다”고
                            말했다.</p>

                        <p>윤 대통령의 이번 제안은 국제 사회에서 AI 기술의 윤리적 기준과 규범을 수립하려는 움직임에 중요한 계기가 될 것으로 보이며, AI 기술의 발전과 함께 관련
                            법적·윤리적 기준을 마련하려는 글로벌 논의가 활발해질 것으로 기대된다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 뉴스 10 -->
    <div class="modal" id="news10">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news10')"></span>
            <header class="modal-header">
                <div class="issue-number">10/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2023년 6월 28일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">미국 로펌 클락슨, 오픈AI 상대 저작권 및 프라이버시 침해 소송 제기 ⚖️</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>미국 로펌 클락슨, 오픈AI에 저작권 및 프라이버시 침해 소송 제기… AI 데이터 수집 방식 논란</strong></p>
                        <p>AI 학습을 위한 데이터 수집 과정에서 저작권과 프라이버시 침해 논란이 불거졌다. 미국 로펌 클락슨은 오픈AI가 AI 모델 학습을 위해 저작권이 있는 콘텐츠를 무단으로
                            사용했다며 법적 책임을 물어야 한다고 주장하며 소송을 제기했다.</p>

                        <p>2023년 6월 28일, 클락슨 로펌은 오픈AI를 상대로 저작권 및 프라이버시 침해 소송을 제기했다. 소송의 핵심 쟁점은 오픈AI가 대규모 데이터를 수집하여 AI
                            모델을 학습시키는 과정에서 저작권 보호를 받는 콘텐츠를 무단으로 활용했다는 주장이다. 클락슨 측은 이로 인해 창작자의 권리가 침해되었으며, 오픈AI가 이에 대한 법적
                            책임을 져야 한다고 밝혔다.</p>

                        <p>클락슨 로펌은 “오픈AI의 행동은 창작자들의 권리를 무시한 것으로, 이는 AI 기술의 윤리적 사용을 위협하는 심각한 문제”라고 지적했다. 특히 AI 학습을 위한 대량의
                            데이터 수집이 창작물의 허가 없는 사용을 포함하고 있으며, 이는 창작자의 권리를 침해하고 있다는 입장이다.</p>

                        <p>이번 소송은 AI 모델 학습에 필요한 데이터 수집 방식이 법적·윤리적 논란에 직면했음을 보여주는 사례로, 향후 AI 개발에 있어 저작권 보호와 프라이버시 문제가 중요한
                            이슈로 떠오를 것으로 보인다. AI 기술이 발전하는 가운데 창작자의 권리와 개인정보 보호를 위한 규제 마련에 대한 논의가 한층 더 활발해질 것으로 예상된다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 뉴스 11 -->
    <div class="modal" id="news11">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news11')"></span>
            <header class="modal-header">
                <div class="issue-number">11/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2023년 7월 26일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">한국 개인정보보호위원회, 오픈AI에 ‘개인정보 유출 사고’과태료 처분 🇰🇷</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>개인정보보호위원회, 오픈AI에 과태료 처분… “사용자 개인정보 보호 미흡”</strong></p>
                        <p>한국 개인정보보호위원회가 오픈AI에 대해 개인정보 유출 사고와 관련한 과태료 처분을 내렸다. 오픈AI가 사용자 개인정보를 충분히 보호하지 못했다는 지적에 따라 내려진
                            이번 조치는 개인정보보호법 위반에 따른 것으로, AI 기업들의 데이터 보호 의무에 대한 경각심을 일깨우고 있다.</p>

                        <p>2023년 7월 26일, 개인정보보호위원회는 오픈AI에 과태료를 부과하며, 개인정보보호법 위반 사항을 공식적으로 발표했다. 이번 처분은 오픈AI가 사용자 데이터를
                            안전하게 관리하지 못한 점을 문제 삼은 것으로, AI 기업들이 개인정보 보호에 더욱 신경 써야 한다는 메시지를 담고 있다.</p>

                        <p>개인정보보호위원회는 “오픈AI는 데이터 보호 방침을 강화하고, 사용자 개인정보의 안전한 관리에 더욱 신경 써야 한다”며 경고의 뜻을 밝혔다. 이번 처분을 계기로 AI와
                            관련된 개인정보 보호의 중요성이 더욱 부각될 전망이다.</p>

                        <p>이번 결정은 AI 기술이 사용자 데이터를 다루는 과정에서 더욱 엄격한 개인정보 보호 조치를 요구하는 흐름을 보여주는 사례로 평가되고 있으며, 다른 AI 기업들에게도
                            개인정보 보호 의무에 대한 주의를 환기시키는 계기가 될 것으로 보인다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 뉴스 12 -->
    <div class="modal" id="news12">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news12')"></span>
            <header class="modal-header">
                <div class="issue-number">12/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2023년 9월 25일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">오픈AI, 대화 가능한 ChatGPT 제공 계획 발표 💬</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>오픈AI, “대화 가능한 ChatGPT” 제공 계획 발표… 자연스러운 상호작용 목표</strong></p>
                        <p>오픈AI가 사용자와 더욱 자연스럽고 인간과 유사한 대화를 할 수 있는 ChatGPT 기능을 선보일 계획을 발표했다. 이로 인해 교육, 고객 서비스, 엔터테인먼트 등
                            다양한 분야에서 AI와의 상호작용이 한층 더 강화될 것으로 기대된다.</p>

                        <p>2023년 9월 25일, 오픈AI는 대화 가능성이 강화된 ChatGPT의 제공 계획을 공식 발표했다. 이번 계획은 AI 모델을 개선하여 사용자들이 이전보다 더욱
                            부드럽고 유연한 대화를 경험할 수 있도록 설계되었으며, 사용자와의 상호작용을 인간과 유사한 수준으로 끌어올리는 것을 목표로 하고 있다.</p>

                        <p>오픈AI는 이번 업데이트가 교육, 고객 서비스, 엔터테인먼트 등 다양한 분야에서 ChatGPT의 활용도를 크게 높일 수 있을 것으로 기대하고 있다. 특히 교육
                            분야에서는 개인 맞춤형 학습 지원, 고객 서비스 분야에서는 즉각적인 고객 문의 응답, 엔터테인먼트 분야에서는 인터랙티브한 사용자 경험 제공 등이 가능해질 것으로
                            보인다.</p>

                        <p>오픈AI의 발표에 따라 AI와 인간의 상호작용이 더욱 발전하고 있는 가운데, 향후 ChatGPT가 다양한 산업에서 어떤 변화를 가져올지 주목된다. 오픈AI는 향상된
                            대화 기능을 통해 AI가 사용자와 더 깊이 연결되고 실질적인 도움을 줄 수 있는 도구로 자리 잡기를 기대하고 있다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 뉴스 13 -->
    <div class="modal" id="news13">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news13')"></span>
            <header class="modal-header">
                <div class="issue-number">13/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2023년 11월 17일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">오픈AI, 샘 올트먼 해임 발표 🛑</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>오픈AI 사태, 빅테크 업계 내 AI 개발 속도와 방향에 대한 깊은 분열 노출</strong></p>
                        <p>최근 오픈AI에서 일어난 갈등은 AI 개발의 속도와 방향을 둘러싼 빅테크 업계의 이견을 극적으로 드러내며, AI 기술의 발전이 초래할 윤리적, 사회적 문제에 대한
                            논쟁이 더욱 가열되고 있음을 보여준다.</p>

                        <p>오픈AI의 수석 과학자 일리야 수츠케버가 CEO 샘 올트먼의 퇴출을 주도한 이번 사태는 AI의 발전 속도를 두고 오랫동안 이어진 빅테크 업계 내 갈등을 부각시켰다.
                            AI 개발의 속도와 윤리적 고려가 충돌하는 가운데, 업계 내의 불일치는 점점 더 명확해지고 있다.</p>

                        <p>실제로 AI 발전의 위험성에 대해 오래전부터 갈등이 존재해왔다. 구글의 공동 창립자 래리 페이지와 테슬라 CEO 일론 머스크가 2013년 머스크의 생일 파티에서 AI의
                            위험성을 둘러싸고 격론을 벌이다 절연하게 된 일화는 AI 논쟁의 깊이를 상징적으로 보여준다. 이후 약 10년이 지난 지금, ChatGPT의 등장은 AI 논쟁에 다시
                            불을 붙였다.</p>

                        <p>특히 지난 3월, 비영리 기구 ‘퓨처 오브 라이프’는 AI 규제의 필요성을 제기하며 AI 개발을 6개월간 중단할 것을 요구했다. 이는 AI 개발이 가져올 수 있는
                            잠재적 위험에 대한 논의와 규제 필요성에 대한 심각한 토론을 촉발시켰다.</p>

                        <p>AI 연구에 신중론을 제기한 대표적인 학자로는 제프리 힌튼이 있다. AI의 핵심 기술인 딥러닝 개념을 고안한 힌튼은 지난 5월 구글을 떠나며 “내 일생을 후회한다”고
                            밝히며, AI가 자율적으로 코드 생성을 허용할 경우 ‘킬러 로봇’ 같은 부작용이 현실화될 수 있다고 경고했다. 이러한 발언은 큰 파장을 일으키며, AI 연구자들이
                            자율적인 규제 필요성에 대해 함께 목소리를 내야 한다고 강조했다.</p>

                        <p>반면 샘 올트먼을 포함한 일부 빅테크 인사들은 “AI는 긍정적인 기술”이라며, AI 개발을 멈출 수 없는 현실적 이유가 많다고 주장하고 있다. 이처럼 AI에 대한
                            낙관주의와 비관주의 간의 대립은 여전히 첨예하게 이어지고 있으며, AI 기술 발전을 둘러싼 논쟁이 더욱 치열해질 것으로 보인다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 뉴스 14 -->
    <div class="modal" id="news14">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news14')"></span>
            <header class="modal-header">
                <div class="issue-number">14/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2023년 11월 21일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">오픈AI, 샘 올트먼 복귀 발표 🔄</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>오픈AI, 샘 올트먼 복귀 발표… AI 개발 속도와 방향을 둘러싼 갈등 재점화</strong></p>
                        <p>오픈AI가 2023년 11월 21일 샘 올트먼의 복귀를 공식 발표했다. 이번 결정은 AI 개발 전략을 안정화하고 가속화하기 위한 조치로 해석되며, AI 기술의 발전
                            속도를 둘러싼 빅테크 업계 내 분열을 다시금 부각시키고 있다.</p>

                        <p>최근 오픈AI 내 갈등은 AI의 미래에 대한 빅테크 업계의 의견이 일치하지 않음을 드러냈다. 오픈AI의 수석과학자 일리야 수츠케버가 CEO 샘 올트먼을 퇴출하는 데
                            앞장서며, AI 개발 속도와 그에 따른 윤리적 고려가 첨예한 논쟁거리로 떠올랐다. 이 사건은 오픈AI뿐 아니라 빅테크 업계 전체에서 AI 기술 발전 방향에 대한 깊은
                            의견 차이를 보여준다.</p>

                        <p>이와 유사한 논쟁은 과거에도 있었다. 구글의 공동 설립자 래리 페이지와 테슬라 창립자 일론 머스크가 AI의 위험성을 둘러싸고 격론을 벌이다 절연하게 된 2013년의
                            일화가 그 예다. 약 10년이 지난 지금, ChatGPT의 등장은 AI 발전을 둘러싼 논쟁을 다시 불붙게 만들었다. 특히 지난 3월, 비영리 기구 ‘퓨처 오브
                            라이프’가 AI 규제책 마련을 촉구하며 AI 개발 6개월 중단을 요구하는 등 AI의 잠재적 위험에 대한 우려가 고조되었다.</p>

                        <p>AI의 위험성을 경고한 대표적인 인물로는 딥러닝 개념의 창시자 제프리 힌튼이 있다. 그는 지난 5월 구글을 떠나며 “나의 일생을 후회한다”고 밝히고, AI가 자율적으로
                            코드를 생성하도록 허용할 경우 ‘킬러 로봇’ 같은 위협이 현실화될 수 있다고 경고했다. 힌튼은 AI 연구자들이 함께 목소리를 내며 자율적으로 규제할 필요성을
                            강조했다.</p>

                        <p>반면, 샘 올트먼과 일부 빅테크 인사들은 “AI는 긍정적인 기술”이라며 AI 개발을 멈출 수 없다는 현실적 입장을 견지하고 있다. 이와 같은 낙관주의적 견해는 오픈AI
                            내부에서도 큰 갈등을 불러일으켰다. 비록 ‘5일 천하’로 끝났지만, 오픈AI 내 비관주의자들이 샘 올트먼을 경계하며 축출을 시도한 것은 AI의 급속한 발전에 대한
                            우려가 여전히 존재함을 시사한다.</p>

                        <p>이번 사건은 단순한 해프닝이 아니다. AI에 대한 낙관주의와 비관주의의 대립이 이론적 논쟁을 넘어 실질적인 대결로 전환되고 있다. 그 중심에는 ChatGPT와 같은
                            고도화된 생성형 AI 기술이 자리하고 있으며, 이에 따른 윤리적·사회적 논쟁은 AI의 미래 방향성을 결정짓는 중요한 이슈로 떠오르고 있다.</p>

                        <p>AI에 대한 우려와 논쟁은 교육 분야에서도 나타났다. ChatGPT가 출시된 직후 일부 학교에서는 이를 금지하기로 했지만, 곧 ChatGPT가 교육에 중요한 역할을 할
                            수 있다는 인식이 확산되며 금지 조치를 해제하고 오히려 교실에서의 활용을 장려했다. 이는 ChatGPT와 같은 AI가 현대 사회에서 필수적인 도구로 자리 잡고 있음을
                            보여주는 사례로 평가된다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 뉴스 15 -->
    <div class="modal" id="news15">
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('news15')"></span>
            <header class="modal-header">
                <div class="issue-number">15/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2024년 5월 23일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">이재명 더불어민주당 대표, “기본소득은 인공지능 시대에 피할 수 없는 제도” 💰</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>이재명 “AI 시대, 기본소득은 피할 수 없는 제도”… 일자리 변화 대비 강조</strong></p>
                        <p>인공지능(AI)의 발전이 가속화되면서 일자리 변화에 대한 우려가 커지는 가운데, 이재명 더불어민주당 대표는 기본소득 도입의 필요성을 역설했다. AI로 인해 다수의
                            일자리가 사라질 가능성이 커지면서, 생계와 재교육을 지원하는 기본소득이 중요한 대안이 될 수 있다는 설명이다.</p>

                        <p>2024년 5월 23일, 이재명 대표는 “기본소득은 인공지능 시대에 피할 수 없는 제도”라고 밝히며, “AI로 인해 많은 이들이 일자리를 잃을 가능성이 커지고 있는
                            만큼, 기본소득은 최소한의 생계를 보장하고, 새로운 기술을 배우거나 재취업할 기회를 제공할 수 있다”고 강조했다. 그는 기본소득이 도입되면 사람들이 안정적인 환경에서
                            자신의 기술을 개발하고 새로운 일자리를 찾는 데 집중할 수 있을 것이라고 덧붙였다.</p>

                        <p>이 대표의 발언은 해외에서 논의가 활발히 진행되고 있는 기본소득 도입 흐름과 맞물린다. 예를 들어 핀란드는 2017년부터 2018년까지 기본소득 실험을 통해 일자리를
                            잃은 사람들에게 월 560유로를 지급했으며, 실험 결과 긍정적인 반응을 이끌어낸 바 있다.</p>

                        <p>한국 정부 역시 ‘디지털 뉴딜’ 정책의 일환으로 AI 관련 디지털 역량 강화를 위한 다양한 프로그램을 추진 중이다. 특히 AI와 자동화로 인해 일자리 감소가 예상되는
                            직종에 대한 재교육 프로그램도 마련하고 있다. 고려대 경제학과 강규호 교수는 “AI와 인간이 공존하는 미래를 만들기 위해서는 개인의 기술 역량 향상뿐 아니라, 사회
                            전반의 제도적 변화가 반드시 뒤따라야 한다”며 “기본소득과 같은 정책 도입은 그 첫걸음이 될 수 있다”고 평가했다.</p>

                        <p>AI가 가져올 변화는 이미 현실로 다가오고 있다. 이재명 대표는 이러한 변화 속에서 기본소득이 사회적 안전망 역할을 할 수 있음을 강조하며, AI와 자동화 시대에
                            대비하기 위한 실질적인 제도적 준비가 필요하다고 말했다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Card News Modals -->
    <!-- News 17 -->
    <div class="modal" id="news17">
        <div class="modal-card-content">
            <span class="modal-card-close" onclick="closeModal('news17')"></span>
            <header class="modal-header">
                <div class="issue-number">17/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2024년 6월 16일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">변화와 적응</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">

                        AI로 혁신하는 미디어 산업, 청년들의 새로운 도전이 시작된다

                        <p>서울 신촌의 한 교육센터에서 30여 명의 청년들이 AI 기반 콘텐츠 제작 교육에 몰두하고 있다. 이들은 동아일보가 주관하는 ‘콘텐츠 크리에이터 양성 과정’에 참여해
                            AI를 활용한 뉴스 기사 작성, 텍스트 요약, 자료 조사 등 언론사 내 자동화 기법을 배우고 있다. 급변하는 미디어 환경에 발맞춰 이 과정은 가짜뉴스 판별, 빅데이터
                            수집 및 자연어 처리, AI 기반 영상 편집 등 다양한 첨단 기술을 포괄하며, 청년들은 이를 통해 효율적이고 혁신적인 콘텐츠 제작 방법을 익히고 있다.</p>
                        <p>교육생인 이나라(27) 씨는 “AI 기술을 익히면 기존의 수작업에서 벗어나 빠르고 효율적인 콘텐츠 제작이 가능할 것 같아 이 과정에 지원했다”고 말했다. 그는 또한
                            “가짜뉴스 판독이나 자연어 처리 기능을 활용하면 더욱 신뢰도 높은 콘텐츠를 제공할 수 있을 것으로 기대된다”고 밝혔다.</p>
                        <p>서울대학교 김영준 교수는 “미디어 업계는 AI 기술 도입을 가속화하고 있으며, 단순한 기사 작성뿐 아니라 자료 분석, 영상 편집 등 전반적인 업무에 AI가 적용되고
                            있다”고 설명했다. 이어서 김 교수는 “미디어 산업에서 AI는 단순한 보조 도구를 넘어, 점차 핵심 역할을 담당하게 될 것”이라며 청년들의 적극적인 기술 습득을
                            강조했다.</p>
                        <p>이 교육 과정은 또한 실제 현장에서 사용할 수 있는 다양한 AI 도구들에 대한 실습을 포함하고 있다. 교육생들은 텍스트 요약을 위해 ChatGPT와 같은 언어 모델을,
                            가짜뉴스 판독에는 텍스트 분류 AI를, 영상 편집에는 AI 기반 편집 툴을 사용하는 법을 배우고 있다. 참가자들은 단순한 이론이 아닌 실무 중심의 AI 기술을 직접
                            적용하며, 변화하는 미디어 산업에서 경쟁력을 키우고 있다.</p>
                        <p>교육을 기획한 동아일보 관계자는 “AI 기반 콘텐츠 제작은 점차 필수가 되고 있으며, 이러한 실무형 인재 양성이 언론사에서 필요로 하는 역량을 충족시킬 것”이라며
                            “빠르게 변화하는 미디어 환경에 맞춘 교육을 통해 청년들이 미래 미디어 산업에서 주도적인 역할을 할 수 있도록 적극 지원할 예정”이라고 말했다.</p>
                        <p>참가자들의 열정과 AI 기술이 융합되며 만들어가는 새로운 미디어 산업의 모습이 기대되는 가운데, 청년들은 앞으로 이 변화의 중심에서 중요한 역할을 맡을 것으로 보인다.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- News 18 -->
    <div class="modal" id="news18">
        <div class="modal-card-content">
            <span class="modal-card-close" onclick="closeModal('news18')"></span>
            <header class="modal-header">
                <div class="issue-number">18/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2024년 11월 13일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">필요한 건 어쩌면 '철학'</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>“인공지능 시대, 우리는 무엇을 고민해야 하는가?”</strong></p>

                        <p>인공지능 기술이 나날이 발전하며 우리의 일상과 산업 전반에 깊이 침투하고 있다. 이러한 상황에서 인간의 역할과 존재에 대해 고민이 필요하다는 목소리가 높아지고 있다.
                            예측할 수 없는 미래를 앞두고 우리는 어떤 질문을 던져야 할까? 이 시점에서 “인간이란 무엇인가”라는 철학적 질문이 더욱 절실히 요구되고 있다.</p>

                        <p>“계속 변화하고 있는 상황에 맞춰 게임의 규칙을 개정하는 일은 결코 쉽지 않다.”라는 지적처럼, 인공지능과 관련된 논의는 그 자체로 복잡하다. 누가 대표성을 가지고,
                            어떤 방식으로 투명하게 이 문제를 이끌어 가야 하는지조차 명확하지 않은 상황에서, 기술의 발전 속도는 가속화하고 있어 정책 수립이 더 어려워지고 있다.</p>

                        <p>최근에는 인공지능의 역할, 지위, 규제 방식 등을 포괄적으로 논의하기 위해 일시적으로 AI 개발을 중단하자는 제안도 이어지고 있다. 이에 대해 전문가들은 “아마도 우리
                            모두가 인공지능이 초래할 섬뜩한 위험에 직면한 후에야 강제적 멈춤이 시작될 것”이라는 우려를 내놓았다. 기술을 선점하려는 경쟁 심리가 강한 현 상황에서 인공지능의
                            진전을 늦추기란 쉽지 않다는 분석이다.</p>

                        <p>만약 이러한 논의가 늦춰진다면, 인공지능이 인간의 지능을 초월하는 '특이점(Singularity)'은 더 빨리 도래할 것이라는 경고도 나온다.
                            인공일반지능(AGI)으로의 발전이 비관적으로 보일 수 있지만, 그렇다고 해서 인간이 수동적으로 대응해야 한다는 뜻은 아니다.</p>

                        <p>서울대학교 이은수 교수는 예측할 수 없는 미래에 대한 논의보다는 ‘인공지능 시대에도 인간만이 지닐 수 있는 고유한 가치’에 대해 생각해 보아야 한다고 제안한다.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- News 20 -->
    <div class="modal" id="news20">
        <div class="modal-card-content">
            <span class="modal-card-close" onclick="closeModal('news20')"></span>
            <header class="modal-header">
                <div class="issue-number">20/19</div>
                <h1 class="masthead">LOCAL NEWSPAPER</h1>
                <div class="date">2024년 11월 13일</div>
            </header>
            <div class="article-header">
                <h2 class="article-title">제도적 변화</h2>
            </div>
            <div class="article-container">
                <div class="main-article">
                    <div class="article-text">
                        <p><strong>기본소득… AI 대체 일자리 사회 안전망으로 떠올라</strong></p>
                        <p>AI가 기존 일자리를 대체하는 상황에서 일부 전문가들은 기본소득 도입의 필요성을 주장하고 있다.
                            최병천 신성장경제 연구소장은 “AI로 인해 많은 사람들이 일자리를 잃게 될 가능성이 커지는 만큼, 기본소득은
                            최소한의 생계 보장을 통해 새로운 기술을 배우거나 재취업할 기회를 제공할 수 있다”고 설명했다.</p>
                        <p>최 소장은 “기본소득이 도입되면 개인이 안정적인 환경 속에서 자신의 기술을 개발하고 새로운 일자리를 찾는 데
                            집중할 수 있을 것”이라고 덧붙였다.</p>
                        <p>이와 같은 주장은 기본소득 도입 논의가 해외에서도 활발히 진행되고 있음을 반영한다. 핀란드는 2017년부터 2018년까지
                            기본소득 실험을 통해, 일자리를 잃은 사람들에게 월 560유로를 지급한 바 있다.</p>
                        <p>이 실험 결과, 기본소득을 받은 사람들이 기존보다 더 안정적인 생활을 유지하며 학습 및 재교육에 집중한 비율이 높았다는
                            긍정적인 결과가 도출되었다.</p>
                        <p>정부는 ‘디지털 뉴딜’ 정책을 추진하며 AI와 관련된 디지털 역량 강화를 위한 다양한 프로그램을 제공하고 있다. 특히, AI와
                            자동화에 의해 일자리를 잃을 가능성이 높은 직종에 대해 재교육 프로그램을 마련하고 있다.</p>
                        <p>고려대 경제학과 강규호 교수는 “AI와 인간이 공존하는 미래를 만들기 위해서는 개인의 기술 역량 향상뿐 아니라, 사회 전반의
                            제도적 변화가 반드시 뒤따라야 한다”며 “기본소득과 같은 정책적 도입은 그 첫걸음이 될 수 있다”고 강조했다.</p>
                        <p>AI가 가져올 변화는 이미 시작됐고, 이제는 그 변화를 어떻게 받아들일지 고민할 때이다.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
        // document.addEventListener('DOMContentLoaded', () => {
        // 스크롤 시 애니메이션 관찰자 설정
        const items = document.querySelectorAll('.timeline-item');
        const triggers = document.querySelectorAll('.timeline-title, .interactive-article, .additional-content, .card-news');

        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        items.forEach(item => {
            observer.observe(item);
        });

        triggers.forEach(trigger => {
            observer.observe(trigger);
        });

        // 카드뉴스 클릭 시 팝업 표시
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const modalId = card.getAttribute('data-modal');
                if (modalId) {
                    showNewsContent(modalId);
                }
            });
        });

        // 스크린샷 클릭 시 팝업 표시
        const screenshot = document.querySelector('.screenshot');
        if (screenshot) {
            screenshot.addEventListener('click', () => {
                showNewsContent('news19');
            });
        }
        // });

        // 타임라인 항목 클릭 시 팝업 표시


        // 모달 외부 클릭 시 닫기
        window.onclick = function (event) {
            const modals = document.getElementsByClassName('modal');
            for (let modal of modals) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            }
            const cardModals = document.getElementsByClassName('modal-card-content');
            for (let modal of cardModals) {
                if (event.target == modal.parentElement) {
                    modal.parentElement.style.display = 'none';
                }
            }
        }
    }
}

</script>

<style scoped>
/* 기본 스타일 */
body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    font-family: "맑은 고딕", Malgun Gothic, sans-serif;
    scroll-behavior: smooth;
    /* 부드러운 스크롤 추가 */
}

/* 편집자의 말 스타일 */
.editors-note {
    background: linear-gradient(135deg, #ffffff, #f0f8ff);
    padding: 30px 40px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    margin-bottom: 40px;
    text-align: left;
    position: relative;
    cursor: pointer;
    /* 클릭 가능함을 나타내기 위해 추가 */
    border-radius: 15px;
    border: 2px solid #3498db;
    transition: transform 0.3s, box-shadow 0.3s;
    font-family: "맑은 고딕", Malgun Gothic, sans-serif;
}

.editors-note:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.editors-note::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: rgba(128, 128, 128, 0.1);
    /* 회색 음영 */
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}

.editors-note h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #2c3e50;
}

.editors-note h1::before {
    content: "📰";
    /* 이모티콘 추가 */
    font-size: 1.2em;
}

.editors-note p {
    font-size: 1em;
    line-height: 1.6;
    color: #333;
    text-align: justify;
    margin-bottom: 10px;
    /* 문단 간 간격 축소 */
}

/* 타임라인 스타일 */
.timeline-title {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin: 40px 20px 20px 20px;
    color: #2c3e50;
    position: relative;
    background-color: #e0e0e0;
    /* 회색 배경 추가 */
    padding: 10px 0;
    border-radius: 8px;
}

.timeline-title::after {
    content: '';
    width: 60px;
    height: 4px;
    background-color: #3498db;
    display: block;
    margin: 10px auto 0;
    border-radius: 2px;
}

.timeline {
    position: relative;
    padding: 20px 0;
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
}

.timeline::before {
    content: '';
    position: absolute;
    width: 4px;
    background: #3498db;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.timeline-item {
    position: relative;
    width: 50%;
    padding: 20px 40px;
    box-sizing: border-box;
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-out;
    cursor: pointer;
}

.timeline-item.visible {
    opacity: 1;
    transform: translateY(0);
}

.timeline-item:nth-child(odd) {
    left: 0;
}

.timeline-item:nth-child(even) {
    left: 50%;
}

.timeline-item::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 20px;
    height: 20px;
    background: #3498db;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #f5f5f5;
    transition: background 0.3s ease;
}

.timeline-item:nth-child(odd)::before {
    right: -10px;
}

.timeline-item:nth-child(even)::before {
    left: -10px;
}

.timeline-content {
    background: white;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s;
}

.timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.timeline-date {
    color: #3498db;
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 16px;
}

.timeline-content a {
    text-decoration: none;
    color: #2c3e50;
    font-weight: 700;
    font-size: 18px;
    display: inline-block;
    transition: color 0.3s;
}

.timeline-content a:hover {
    color: #3498db;
}

/* 팝업 모달 스타일 */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.5s;
}

.modal-content {
    background: white;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 800px;
    position: relative;
    animation: slideIn 0.5s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    font-family: "맑은 고딕", Malgun Gothic, sans-serif;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-header {
    border-bottom: 2px solid #333;
    margin-bottom: 20px;
    padding-bottom: 10px;
    position: relative;
    text-align: center;
}

.modal-header .issue-number {
    font-size: 14px;
    color: #777;
    margin-bottom: 5px;
}

.modal-title {
    font-size: 2em;
    margin: 0;
    letter-spacing: 1px;
}

.modal-close {
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 28px;
    font-weight: bold;
    color: #3498db;
    cursor: pointer;
    transition: color 0.3s;
}

.modal-close:hover {
    color: #e74c3c;
}

.article-header h2 {
    font-size: 1.5em;
    margin-bottom: 15px;
}

.article-text {
    font-size: 1em;
    line-height: 1.8;
    color: #555;
    text-align: justify;
}

/* 애니메이션 */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* 인터랙티브 요소: 스크롤 애니메이션 */
.timeline-item {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-out;
}

.timeline-item.visible {
    opacity: 1;
    transform: translateY(0);
}

/* 반응형 디자인 */
@media (max-width: 768px) {
    .timeline {
        width: 100%;
    }

    .timeline::before {
        left: 20px;
    }

    .timeline-item {
        width: calc(100% - 40px);
        left: 0 !important;
        padding: 20px;
    }

    .timeline-item::before {
        left: -30px !important;
    }

    .timeline-content {
        padding: 15px;
    }
}

/* 추가된 인터랙티브 기사 스타일 */
.interactive-article {
    margin: 60px 0;
    text-align: center;
}

.interactive-article img {
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.interactive-article img:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0 0, 0, 0.2);
}


/* 추가 기사 내용 섹션 */
.additional-content {
    padding: 40px 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
}

.additional-content h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
    color: #2c3e50;
}

.additional-content p {
    font-size: 1em;
    line-height: 1.8;
    color: #555;
    text-align: justify;
    margin-bottom: 15px;
}

/* 카드뉴스 스타일 */
.card-news {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    font-family: "맑은 고딕", Malgun Gothic, sans-serif;
}

.card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    padding: 20px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    font-family: "맑은 고딕", Malgun Gothic, sans-serif;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
}

.card h4 {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: #2c3e50;
    font-family: "맑은 고딕", Malgun Gothic, sans-serif;
}

.card p {
    font-size: 0.95em;
    color: #555;
}

/* 캡쳐 스타일 */
.screenshot {
    position: relative;
    background: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
    cursor: pointer;
    font-family: "맑은 고딕", Malgun Gothic, sans-serif;
    /* 클릭 가능함을 나타내기 위해 추가 */
}

.screenshot::before {
    content: '📸 캡쳐';
    position: absolute;
    top: -10px;
    left: 20px;
    background: #3498db;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.8em;
    font-weight: bold;
}

/* 카드뉴스 모달 스타일 */
.modal-card-content {
    background: white;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    position: relative;
    animation: slideIn 0.5s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    font-family: "맑은 고딕", Malgun Gothic, sans-serif;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-card-close {
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 28px;
    font-weight: bold;
    color: #3498db;
    cursor: pointer;
    transition: color 0.3s;
}

.modal-card-close:hover {
    color: #e74c3c;
}

/* 영화 느낌의 스크롤 조정 */
.timeline-title,
.interactive-article,
.additional-content,
.card-news {
    transition: transform 1s ease-out, opacity 1s ease-out;
}

.timeline-title.visible,
.interactive-article.visible,
.additional-content.visible,
.card-news.visible {
    transform: translateY(0);
    opacity: 1;
}

.timeline-title,
.interactive-article,
.additional-content,
.card-news {
    transform: translateY(50px);
    opacity: 0;
}

.h3 {
    font-family: "맑은 고딕", Malgun Gothic, sans-serif;
}
</style>
