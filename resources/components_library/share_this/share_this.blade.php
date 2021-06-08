<div class="share-this">
    <ul>
        <li class="facebook">
            <a target="_blank" href="https://www.facebook.com/dialog/feed?app_id=184683071273&link=<?php the_permalink(); ?>&picture=<?php echo get_the_post_thumbnail_url(); ?>&name=<?php the_title(); ?>&description=<?php get_the_permalink(); ?>&redirect_uri=http%3A%2F%2Fwww.facebook.com%2F">
                <i class="fab fa-facebook"></i>
            </a>
        </li>
        <li class="linkedin">
            <a target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=<?php the_title(); ?>">
                <i class="fab fa-linkedin-in"></i>
            </a>
        </li>
        <li class="twitter">
            <a target="_blank" href="http://twitter.com/intent/tweet?text=<?php the_title(); ?>%20<?php the_permalink(); ?>">
                <i class="fab fa-twitter"></i>
            </a>
        </li>
        <li class="share">
            <a target="_blank" href="mailto:?subject=<?php the_title(); ?>&body=<?php the_permalink(); ?>">
                <i class="fas fa-envelope"></i>
            </a>
        </li>
    </ul>
</div>
