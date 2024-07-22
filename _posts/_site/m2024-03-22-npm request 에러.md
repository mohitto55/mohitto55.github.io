info attempt registry request try #1 at 105502 AM
http request PUT http172.30.1.794873-userorg.couchdb.usermohitto55
로 들어가니

{
    "ok": "you are authenticated as 'undefined'"
}
이런게 뜸

"ok: you are authenticated as 'undefined'" 메시지는 npm-cli-login에서 인증이 성공적으로 수행되었으나 사용자 이름이나 다른 인증 정보가 undefined로 설정되어 있음을 나타냅니다. 즉, 사용자 이름이나 기타 인증 정보가 제대로 설정되지 않은 상태입니다.

이 메시지는 사용자가 npm-cli-login을 통해 인증되었지만, 실제 사용자 정보가 정확히 설정되지 않았음을 나타냅니다. 이는 사용자 이름, 비밀번호 또는 다른 인증 정보가 올바르게 입력되지 않았을 가능성이 있습니다.

이러한 경우, npm-cli-login을 다시 실행하고 정확한 사용자 이름과 인증 정보를 입력하여 인증을 다시 시도해야 합니다. 그렇게 하면 "ok: you are authenticated as '사용자이름'"과 같이 사용자 이름이 제대로 표시될 것입니다.

https://github.com/verdaccio/verdaccio/issues/1527