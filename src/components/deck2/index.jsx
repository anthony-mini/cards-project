import Logo from '../../assets/logo-bobby.svg';

export default function Deck2() {
  return (
    <>
      <div className="deck">
        <div className="card card3 card-challenge"></div>
        <div className="card card2 card-challenge"></div>
        <a href="/challenges" className="card card1 card-challenge">
          <h2 className="h2-deck">Challenges</h2>
          <p className="p">
            <img src={Logo} alt="" className="bobby" />
          </p>
          <p className="p"></p>
        </a>
      </div>
    </>
  );
}
