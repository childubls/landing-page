"use client";

import { FormEvent, useState } from "react";

const worries = [
  ["01", "진도는 나가는데, 실력이 쌓이는지 모르겠어요", "아이의 현재 수준을 확인하지 않은 채 교재와 진도만 바뀌면 이해하지 못한 내용이 쌓일 수 있습니다."],
  ["02", "영어를 싫어하게 될까 걱정돼요", "빠른 진도와 반복되는 실패는 작은 성공의 기회를 줄이고 영어 앞에서 주저하게 만들 수 있습니다."],
  ["03", "중학교 영어까지 잘 이어질까요?", "리딩·어휘·문법·라이팅이 연결되지 않으면 중학교에서 독해와 서술형이 갑자기 버거워질 수 있습니다."],
];

const features = [
  ["DIAGNOSIS", "아이에게 맞는 시작점", "레벨테스트와 상담으로 리딩·어휘·문법·듣기·말하기를 살펴보고 적합한 미국 교과서 단계와 학습 방향을 정합니다."],
  ["INTEGRATED", "영어 전 영역 통합학습", "미국 교과서와 영어 원서를 읽고, 어휘와 문법을 익히며, 글과 발표로 표현하는 과정까지 하나로 연결합니다."],
  ["FOCUS 5", "5명 집중형 그룹수업", "학생별 참여와 과제 수행을 살피며, 소수 그룹 안에서 질문하고 표현하는 경험을 충분히 쌓습니다."],
  ["DAILY REVIEW", "매일 쌓이는 학습 확인", "단어시험·문장 리뷰테스트·단계별 평가로 배운 내용의 빈틈을 확인하고 다음 학습에 연결합니다."],
  ["OUTPUT", "북리포트와 프레젠테이션", "읽은 내용을 자신의 글과 말로 정리하며 영어를 아는 단계에서 사용하는 단계로 나아갑니다."],
  ["NEXT STEP", "초등에서 중등까지", "초등 고학년부터 중등 문법·어휘·서술형을 단계적으로 연결해 다음 학년의 부담을 줄입니다."],
];

const faqs = [
  ["5명 그룹수업인데 세밀하게 관리할 수 있나요?", "5명 집중형 그룹수업에서 학생별 참여도, 학습 상태와 과제 수행 여부를 확인합니다. 개인수업과 동일한 완전 개별 진도는 아니며, 실제 반 인원과 관리 방식은 상담에서 투명하게 안내합니다."],
  ["매일 시험을 보면 아이가 부담스럽지 않을까요?", "단어시험과 문장 리뷰테스트는 경쟁을 위한 시험이 아니라 오늘 배운 내용을 짧게 확인하고 놓친 부분을 다시 연결하기 위한 과정입니다."],
  ["미국 교과서가 우리 아이에게 너무 어렵지 않을까요?", "학년만으로 교재를 정하지 않습니다. 레벨테스트와 상담을 바탕으로 아이가 이해할 수 있는 단계부터 시작합니다."],
  ["초등 수업이 중등 영어에도 도움이 되나요?", "초등의 읽기·어휘·문장 기초를 바탕으로 고학년부터 문법·어휘·서술형을 단계적으로 연결합니다. 특정 성적이나 기간을 보장하지는 않습니다."],
];

export default function Home() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }

  return (
    <main id="top">
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="차일드유 범어점 홈"><img src="/child-u-logo.png" alt="ChildU"/><em>범어점</em></a>
        <nav aria-label="주요 메뉴">
          <a href="#difference">수업 방식</a><a href="#growth">성장 과정</a><a href="#faq">FAQ</a>
        </nav>
        <a className="navCta" href="#consult">상담 신청</a>
      </header>

      <section className="hero shell">
        <div className="heroCopy">
          <p className="eyebrow">CHILDU BEOMEO · ELEMENTARY ENGLISH</p>
          <h1>영어를 잘하는 아이보다 먼저,<br/><span>영어를 두려워하지 않는 아이로.</span></h1>
          <p className="lead">우리 아이에게 맞는 시작점을 찾고, 미국 교과서와 영어 원서로 초등 기초부터 중등 준비까지 차근차근 연결합니다.</p>
          <div className="actions"><a className="primary" href="#consult">우리 아이 시작점 찾기 <span>↗</span></a><a className="textLink" href="#difference">어떻게 배우나요? →</a></div>
          <div className="proof"><span><b>5명</b> 집중형 그룹수업</span><span><b>6영역</b> 통합 영어학습</span><span><b>3단계</b> 안심 성장 과정</span></div>
        </div>
        <div className="editorial" aria-label="차일드유 학습 방식 미리보기">
          <div className="photoCard"><div className="sun"/><div className="student"><span>READ</span><b>THINK</b><em>SPEAK</em></div><p>영어를 읽고<br/>생각하고<br/>표현하는 시간</p></div>
          <div className="quoteCard"><img className="cardLogo" src="/child-u-logo.png" alt="ChildU"/><small>OUR PHILOSOPHY</small><b>빠르게보다<br/>바르게.</b><span>아이의 속도에 맞춘 성장</span></div>
          <div className="bookCard"><i>AMERICAN<br/>TEXTBOOK</i><i>BOOK<br/>REPORT</i><i>MY<br/>STORY</i></div>
          <div className="statCard"><b>1:5</b><span>서로 배우고<br/>세심하게 살피는 수업</span></div>
        </div>
      </section>

      <section className="ticker" aria-hidden="true"><div>READ · WRITE · LISTEN · SPEAK · PRESENT · GROW · READ · WRITE · LISTEN · SPEAK · PRESENT · GROW ·</div></section>

      <section className="worry shell section">
        <div className="sectionHead"><p className="eyebrow red">WHY IT MATTERS</p><h2>혹시, 이런 마음으로<br/>영어교육을 고민하고 계셨나요?</h2></div>
        <div className="worryGrid">{worries.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
        <div className="empathy">영어교육 방향을 정하기 어려운 것은 부모님의 노력이 부족해서가 아닙니다. <b>아이마다 현재 수준과 필요한 학습 순서가 다르기 때문입니다.</b></div>
      </section>

      <section id="difference" className="difference section">
        <div className="shell"><div className="sectionHead light"><p className="eyebrow">THE CHILDU WAY</p><h2>아이에게 맞는 방향을 찾고,<br/><span>이해한 영어를 표현까지 연결합니다.</span></h2><p>교재를 정해 놓고 아이를 맞추지 않습니다. 현재 위치를 먼저 확인하고 필요한 영역과 난이도를 설계합니다.</p></div>
          <div className="featureGrid">{features.map(([tag,t,d],i)=><article key={tag} className={i===0||i===5?"accent":""}><small>{tag}</small><span className="num">0{i+1}</span><h3>{t}</h3><p>{d}</p><b className="arrow">↗</b></article>)}</div>
        </div>
      </section>

      <section id="growth" className="growth shell section">
        <div className="sectionHead"><p className="eyebrow red">CHILDU SAFE GROWTH</p><h2>우리 아이 영어 안심 성장 3단계</h2><p>시작점을 찾고, 올바른 방향으로 관리해, 오래가는 영어 습관을 만듭니다.</p></div>
        <div className="steps">
          <article><b>01</b><small>DISCOVER</small><h3>영어 시작점 찾기</h3><p>학습 고민과 기존 경험을 듣고, 영역별 현재 수준과 우선 학습 방향을 함께 정리합니다.</p></article>
          <div className="stepArrow">→</div>
          <article><b>02</b><small>GROW</small><h3>학습 방향 관리하기</h3><p>이해 가능한 단계에서 수업·복습·평가를 연결해 작은 성취를 차근차근 쌓습니다.</p></article>
          <div className="stepArrow">→</div>
          <article><b>03</b><small>REVIEW</small><h3>오래가는 습관 만들기</h3><p>성장한 부분과 보완점, 다음 계획을 확인하며 초등 영어를 중등 준비까지 이어갑니다.</p></article>
        </div>
      </section>

      <section className="outcome section">
        <div className="shell outcomeGrid"><div className="before"><small>WITHOUT DIRECTION</small><h2>방향 없이<br/>진도만 쌓이면</h2><ul><li>반복되는 실수와 낮아진 자신감</li><li>학원과 학습법을 바꾸는 피로</li><li>중학교에서 뒤늦게 드러나는 공백</li></ul></div><div className="pivot">→<span>작은 성취가<br/>쌓이면</span></div><div className="after"><small>WITH CHILDU</small><h2>“나도 영어로<br/>표현할 수 있어요”</h2><ul><li>나에게 맞는 구체적인 출발점</li><li>읽고 쓰고 말하며 생기는 자신감</li><li>성장 과정과 다음 계획을 보는 안심</li></ul></div></div>
      </section>

      <section className="evidence shell section">
        <div className="sectionHead"><p className="eyebrow red">VISIBLE GROWTH</p><h2>배운 흔적이, 성장의 증거가 됩니다.</h2></div>
        <div className="evidenceGrid"><article><div className="paper"><span>BOOK REPORT</span><h4>My favorite scene</h4><p>I think the character was brave because...</p><i>Great idea! ★</i></div><h3>북리포트</h3><p>읽은 내용을 자신의 문장으로 정리합니다.</p></article><article><div className="presentation"><b>MY STORY</b><span>01 — IDEA</span><span>02 — DRAFT</span><span>03 — SPEAK</span><em>↗</em></div><h3>프레젠테이션</h3><p>생각을 영어로 조직하고 자신 있게 발표합니다.</p></article><article><div className="report"><small>MONTHLY GROWTH</small><div><span>READING</span><b>↗</b></div><div><span>WRITING</span><b>↗</b></div><div><span>NEXT GOAL</span><b>→</b></div></div><h3>학부모 성장 안내</h3><p>참여도·성취도·보완점과 다음 계획을 구체적으로 공유합니다.</p></article></div>
      </section>

      <section id="faq" className="faq shell section"><div className="sectionHead"><p className="eyebrow red">FAQ</p><h2>상담 전, 많이 물어보시는 질문</h2></div><div className="faqList">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>

      <section id="consult" className="consult section">
        <div className="shell consultGrid"><div><p className="eyebrow">START WITH A CONVERSATION</p><h2>우리 아이에게 맞는<br/>영어 시작점부터<br/><span>상담에서 확인해보세요.</span></h2><p>현재 학습 경험과 고민을 남겨주시면 확인 후 연락드리겠습니다.</p><div className="miniInfo"><span>대구 수성구 범어동</span><span>초등 전문 영어교육</span></div></div>
          <form onSubmit={submit}>{sent ? <div className="thanks"><b>상담 신청이 접수되었습니다.</b><p>남겨주신 내용을 확인한 뒤 연락드리겠습니다.</p><button type="button" onClick={()=>setSent(false)}>다시 작성하기</button></div> : <><label>학부모 연락처<input required type="tel" placeholder="010-0000-0000"/></label><div className="split"><label>학생 이름<input required placeholder="학생 이름"/></label><label>학년<select required defaultValue=""><option value="" disabled>학년 선택</option><option>초등 1학년</option><option>초등 2학년</option><option>초등 3학년</option><option>초등 4학년</option><option>초등 5학년</option><option>초등 6학년</option></select></label></div><label>현재 영어 고민<textarea placeholder="현재 학습 경험과 어려워하는 부분을 알려주세요."/></label><label className="agree"><input required type="checkbox"/> 상담 연락을 위한 개인정보 수집·이용에 동의합니다.</label><button className="submit" type="submit">상담 신청하기 <span>↗</span></button></>}</form>
        </div>
      </section>
      <footer><div className="shell"><a className="brand footerBrand" href="#top"><img src="/child-u-logo.png" alt="ChildU"/><em>범어점</em></a><p>영어를 두려워하지 않고 계속 배우는 아이로.</p><small>© 2026 차일드유 범어점. All rights reserved.</small></div></footer>
      <a className="mobileCta" href="#consult">우리 아이 시작점 찾기 <span>↗</span></a>
    </main>
  );
}
