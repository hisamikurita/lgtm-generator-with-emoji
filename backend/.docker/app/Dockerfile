FROM php:8.2-fpm

ENV TZ Asia/Tokyo

# システム依存関係のインストール
RUN apt-get update && \
	apt-get install -y git unzip libzip-dev libicu-dev libonig-dev && \
	docker-php-ext-install intl pdo_mysql zip bcmath

# カスタムPHP設定ファイルのコピー
COPY ./.docker/app/php.ini /usr/local/etc/php/php.ini

# Composerのグローバルインストール
COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer

# 作業ディレクトリの設定
WORKDIR /app

# 作業ディレクトリのパーミッション変更
RUN chown -R www-data:www-data /app

# Laravelインストーラーのグローバルインストール
RUN composer global require laravel/installer

# グローバルComposerバイナリディレクトリをPATHに追加
ENV PATH="/root/.composer/vendor/bin:$PATH"
