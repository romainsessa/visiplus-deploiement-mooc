#!/bin/sh

envsubst '$PORT' \
< /etc/nginx/templates/default.conf.template \
> /etc/nginx/conf.d/default.conf


cat <<EOF > /usr/share/nginx/html/env.js
window.env = {
  BOOK_BACK_URL: "${BOOK_BACK_URL}"
};
EOF

exec nginx -g 'daemon off;'