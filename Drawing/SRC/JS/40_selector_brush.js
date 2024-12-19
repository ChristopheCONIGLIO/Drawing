
//
//
// Variable du brush
//
//
const brushOptions = document.querySelectorAll('.brush-option');
brushSelected = new FullBrush(30);

function applyBrush(item){
    if( item.getAttribute('data-id') == "Gomme0") brushSelected = new Gomme(10);
    if( item.getAttribute('data-id') == "Gomme1") brushSelected = new Gomme(30);
    if( item.getAttribute('data-id') == "Gomme2") brushSelected = new Gomme(50);
    if( item.getAttribute('data-id') == "B1") brushSelected = new FullBrush(1);
    if( item.getAttribute('data-id') == "B2") brushSelected = new FullBrush(15);
    if( item.getAttribute('data-id') == "B3") brushSelected = new FullBrush(30);
    if( item.getAttribute('data-id') == "B4") brushSelected = new FullBrush(50);
    if( item.getAttribute('data-id') == "R") brushSelected = new FullBrush(200);
    if( item.getAttribute('data-id') == "P1") brushSelected = new PaintBrush(10);
    if( item.getAttribute('data-id') == "P2") brushSelected = new PaintBrush(40);
    if( item.getAttribute('data-id') == "P3") brushSelected = new PaintBrush(60);
    if( item.getAttribute('data-id') == "T1") brushSelected = new Tampon_Star();
    if( item.getAttribute('data-id') == "T2") brushSelected = new Tampon_Heart();
    if( item.getAttribute('data-id') == "T3") brushSelected = new Tampon_Rainbow(30,15,6);
    if( item.getAttribute('data-id') == "T4") brushSelected = new Tampon_Rainbow(10,5,7);
    if( item.getAttribute('data-id') == "T5") brushSelected = new Tampon_Rainbow2(30,15,6);
    if( item.getAttribute('data-id') == "T6") brushSelected = new Tampon_Rainbow2(10,5,7);
}

