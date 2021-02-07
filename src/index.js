const maanantaiLista = [];

//Tässä fetchataan eli haetaan url:sta .json tiedosto
const fetchJSON = async () => {
  try {
    //haetaan tiedosto ja muutetaan json muotoon res.json().
    await fetch(
      "https://www.sodexo.fi/ruokalistat/output/weekly_json/152"
    ).then((res) =>
      //muutetaan json muotoon ja lisätään data listaan.
      res.json().then((data) =>
        maanantaiLista.push({
          ravintola: data.meta.ref_title,
          courses: data.mealdates[0].courses,
        })
      )
    );
    mondayFood();
  } catch (err) {
    console.error(err);
  }
};

fetchJSON();

const mondayFood = () => {

  let kotiRuoka = maanantaiLista[0].courses[1];
  let kasvisRuoka = maanantaiLista[0].courses[2];
  let jalkiRuoka = maanantaiLista[0].courses[4];

  //haetaan html tiedostosta ravintolan paikan nimi ja [0] viittaa ensimmäiseen menulaatikkoon
  let titleRes = document.getElementsByClassName("res")[0];
  titleRes.innerHTML = maanantaiLista[0].ravintola;
  let menutext = document.getElementsByClassName("menutext")[0];
  menutext.innerHTML = `<h3>Kotiruoka</h3>
  ${kotiRuoka.title_fi}
  <h3> Kasvisruoka </h3>
  ${kasvisRuoka.title_fi}
  <h3> Jälkiruoka </h3>
  ${jalkiRuoka.title_fi}`;
};
