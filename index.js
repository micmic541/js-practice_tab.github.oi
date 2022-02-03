/*即時関数 参考➡https://ribbit.work/blog/javascript-iife/*/
(function() {
    // DOM要素取得
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length;

    // 初期化ー最初のタブ内容表示しておく
    const init = function(){
        $content[0].style.display = 'block';
    };
    // 上の関数実行
    init();

    /* クリックしたらタブ切り替わる機能 */
    // クリックしたら起こるイベントー関数
    const handleClick = function(e){
        e.preventDefault();
        // クリックされたnavとそのdataを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        // 対象外のnav, contentを全て一度リセットする
        let index = 0;
        while(index < navLen){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }
        
        // 対処のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);

        /*console.log($nav[targetVal].classList);*/
    };
    //全nav要素に対して関数を適用・発火
    let index = 0;
    while(index < navLen){
        $nav[index].addEventListener('click', function(e){
            handleClick(e);
        });
        index++;
    }

})();