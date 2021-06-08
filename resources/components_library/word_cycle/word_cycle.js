
function cycleTitles() {
    animateHeadline($('.word-cycle'));

    var duration = 5500;

    function animateHeadline($word_cycle) {
        $word_cycle.each(function () {
            var wordCycle = $(this);

            //trigger animation
            setTimeout(function () {
                hideWord(wordCycle.find('.is-hidden:first-of-type').eq(0));
            }, duration);
        });
    }

    function hideWord($word) {
        var nextWord = takeNext($word);
        switchWord($word, nextWord);
        setTimeout(function () {
            hideWord(nextWord);
        }, duration);
    }

    function takeNext($word) {
        return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function switchWord($oldWord, $newWord) {
        $oldWord.removeClass('is-visible').addClass('is-hidden');
        $newWord.removeClass('is-hidden').addClass('is-visible');
    }
}
