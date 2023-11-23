import Logo from '../../assets/logo-bobby.svg';

export default function Deck() {
  return (
    <>
      <div className="deck">
        <div className="card card3 card-quest"></div>
        <div className="card card2 card-quest"></div>
        <a href="/question" className="card card1 card-quest">
          <h2 className="h2-deck">Question</h2>
          <p className="p">
            <img src={Logo} alt="" className="bobby" />
          </p>
          <p className="p"></p>
        </a>
      </div>
    </>
  );
}
