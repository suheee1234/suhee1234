<div>
  import React from 'React';
  const App = () =&gt; {'{'}
  return (
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Дуучдын мэдээлэл</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
  <link rel="stylesheet" href="/singers_info/singers.css" />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <div className="topheader">
    <div className="topheadercontainer">
      <div className="right-logo">
        <i className="fa-solid fa-bars-staggered dropdown" />
      </div>
      <div className="waves">
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
      </div>
      <div className="left-menu">
        <i className="fa-solid fa-magnifying-glass search_main" />
        <input type="text" name id className="search_bar" />
      </div>
    </div>
  </div>
  <div className="main-menu1">
    <ul>
      <li><a href="/home/home.html">Үндсэн цэс</a></li>
      <li><a href="/singers_info/singers.html">Дуучид</a></li>
      <li><a href="/events/event.html">Эвент</a></li>
      <li><a href="/music.html" target="_blank">Тоглуулагч</a></li>
      <li><a href="#">Бидний тухай</a></li>
    </ul>
  </div>
  {/* Singers */}
  <div className="topContentHeader">
    <div className="rightText">
      <h3>Уран бүтээлчид</h3>
      <div className="Line1" />
    </div>
    <div className="leftSearch">
      <i className="fa-solid fa-magnifying-glass sda" />
      <input className="searchMain" type="search" placeholder="Хайх дуучнаа оруулна уу" />
    </div>
  </div>
  {/*  */}
  <div className="grid">
    <div className="items">
      <img src="/img_singers/ginjin.jpg" alt />
      <div className="texts"><h3>Гинжин</h3>
        <h4>Genre:Pop, R&amp;B</h4>
        <button className="Info btn btn-primary" data-toggle="modal" data-target="#exampleModal"><a href="#">Дэлгэрэнгүй</a></button>
      </div>
    </div>
    <div className="items">
      <img src="/img_singers/mrsm.jpg" alt />
      <div className="texts"><h3>Mrs.M</h3>
        <h4>Genre:Rap,Pop</h4>
        <button className="Info btn btn-primary" data-toggle="modal" data-target="#exampleModal1"><a href="#">Дэлгэрэнгүй</a></button>
      </div>
    </div>
    <div className="items">
      <img src="/img_singers/uka.jpg" alt />
      <div className="texts"><h3>Uka</h3>
        <h4>Pop,R&amp;B</h4>
        <button className="Info btn btn-primary" data-toggle="modal" data-target="#exampleModal3"><a href="#">Дэлгэрэнгүй</a></button>
      </div>
    </div>
    <div className="items">
      <img src="/images/davaidasha.jpg" alt />
      <div className="texts"><h3>Davaidasha</h3>
        <h4>Genre:Pop,R&amp;B</h4>
        <button className="Info btn btn-primary" data-toggle="modal" data-target="#exampleModal4"><a href="#">Дэлгэрэнгүй</a></button>
      </div>
    </div>
    <div className="items">
      <img src="/img_singers/seryoja.jpg" alt />
      <div className="texts"><h3>Seryoja</h3>
        <h4>Genre:Pop,Hip-Hop</h4>
        <button className="Info btn btn-primary" data-toggle="modal" data-target="#exampleModal4"><a href="#">Дэлгэрэнгүй</a></button>
      </div>
    </div>
    <div className="items">
      <img src="/img_singers/enerel.jpg" alt />
      <div className="texts"><h3>Enerel</h3>
        <h4>Genre:Hip-Hop,Rap</h4>
        <button className="Info btn btn-primary" data-toggle="modal" data-target="#exampleModal4"><a href="#">Дэлгэрэнгүй</a></button>
      </div>
    </div>
    <div className="items">
      <img src="/img_singers/choijoo.jpg" alt />
      <div className="texts"><h3>Choi Joo</h3>
        <h4>Genre:Folk</h4>
        <button className="Info btn btn-primary" data-toggle="modal" data-target="#exampleModal4"><a href="#">Дэлгэрэнгүй</a></button>
      </div>
    </div>
    <div className="items">
      <img src="/img_singers/rokit_bay.jpg" alt />
      <div className="texts"><h3>Rokit Bay</h3>
        <h4>Hip-Hop,Rap</h4>
        <button className="Info btn btn-primary" data-toggle="modal" data-target="#exampleModal4"><a href="#">Дэлгэрэнгүй</a></button>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Mrs.M</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          Энхтуулын Тамир 1993 оны 1 сарын 12-нд Улаанбаатар хотод төрсөн. 
          Олны мэдэхээр тайзны нэр Mrs M[1]. Тэрээр 2008 оноос эхлэн Unicorn амьд хөгжмийн хамтлагт бөмбөр тоглож хөгжмийн салбарт гараагаа эхлүүлсэн.
          2014 онд Slap Label-н Sing Like a Pro[2] төсөлд оролцож продюсер, рэппер Lil Thug E-тэй хамтран "Цор Ганц"[3] нэртэй дуу гаргаснаар олонд танигдаж эхэлжээ.
          Үргэлжлүүлэн тэрээр Slap Records-с "Gentleman" нэртэй нийт 13 дуунаас бүрдсэн анхныхаа цомгийг 2016 онд гаргасан.
          Mrs M нь 2018 оны 11 сараас эхлэн Хонконг-ийн B2 Talent Asia LLC-тэй менежментийн гэрээ байгуулснаар олон улсын хөгжмийн зах зээлд гарахаар зорин ажиллаж эхэлжээ.
          B2 Talent Asia LLC -н лэйбел болох "B2 Music"-с анхны англи хэл дээрх дуугаа гарган, продюсераар Silver Strike ажиллаж Tasty [4] нэртэйгээр 2019 оны 5 сарын 16 нд олны хүртээл болгосон.
          Tasty[5] дуу гарсан үедээ дэлхийн алдартай цахим сэтгүүлүүд дээр онцлогдон Vibe magazine болон B2-гийн хамтарсан Urban Asia Vol.2 цомогт орж байсан юм.
          Цаашлаад 2020 онд B2 Music-с шинэ EP цомгоо гаргахаар ажиллаж байна.
          Цомогт багтсан дуун дээр Америкийн нэрт продюсер Harry Fraud хамтран ажиллах юм.
          Harry Fraud нь Америкийн нэртэй олон уран бүтээлчдийн продюсераар ажилладаг бөгөөд олны мэдэхээр French Montana –гийн продюсер юм.
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  {/* Modal2 */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Гинжин</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          Түүний зорилго зөвхөн дотоодын сонсогчдоос гадна гадаад сонсогчдод монгол хип хопыг таниулах аж. 2019 онд Тайванийн нийслэл Тайпейд зохион байгуулагдсан 30 дахь удаагийн "GMAwards"-д оролцох үеэр нь тус улсын "Focus Taivan News Channel" сайтад “Дэлхий даяар Монгол Улсыг морин хуур, уртын дуугаар төсөөлдөг бол хип хопын хөгжил тун өндөр түвшинд хөгжсөн гэдгийг рэппер Гинжин харуулж байна” хэмээн онцолж байв.
          Гарьд Германд төржээ. Хоёр настайдаа Монголдоо ирээд 10 нас хүртлээ Төмөр замд өсөж, 2000 он гараад 220 мянгат руу нүүсэн аж. "Тэр үед л надад хип хоп хөгжим хийх сэдэл төрсөн. Төмөр замд байхад л хип хоп сонсдог болчихсон байсан. Эргэн тойрныхон гээд л, бас энэ хавьд "Мон-та-реп", "Мөнхийн реп" зэрэг олон хамтлаг байдаг байлаа. Хип хоп сонсдог болгосон газар бол Төмөр зам. Яг хип хоп хийе гэж бодогдуулсан нь 220 мянгат юм байна. Тэр үед "Vanquish" 220 гэж дуулаад л. Тэр нь бидэнд өөрсдөө дуулбал гоё юм байна гэсэн сэтгэгдэл төрүүлсэн.
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  {/* Modal2 */}
  {/* Modal3 */}
  <div className="modal fade" id="exampleModal3" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">UKA</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          Түүний нэр Даваагийн Уламбаяр. 1982 оны 11-р сарын 6-нд төрсөн тайзнаа UKA нэрээрээ алдаршсан. 2004 оноос урлагын кареераа Киви хамтлагаас эхэлсэн. 2014 оноос хойш хувийн уран бүтээлүүдээ гаргаж эхэлсэн. 
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  {/* Modal3 */}
  {/* Modal4 */}
  <div className="modal fade" id="exampleModal4" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Davaidasha</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus modi ab, illo incidunt temporibus aut.
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  {/* Modal4 */}
  {/* Footer */}
  <div className="footer">
    <div className="footercontent">
      <i className="fab fa-facebook" />
      <i className="fa-brands fa-instagram" />
      <i className="fa-brands fa-twitter" />
      <i className="fa-brands fa-youtube" />
    </div>
    <div className="footerTexts">
      {/* <ul class="listFooter"> */}
      <li><a href="#">Үндсэн цэс</a></li>
      <li><a href="#">Эвент</a></li>
      <li><a href="#">Бидний тухай</a></li>
      <li><a href="#">Холбоо барих</a></li>
      {/* </ul> */}
    </div>
    <div className="copyright">
      <p>by Room 4</p>
    </div>
  </div>
  )
  {'}'}
  export default: App;
</div>
