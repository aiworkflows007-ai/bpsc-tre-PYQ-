#!/usr/bin/env python3
"""
Continuous Background File Watcher for BPSC PYQ Practice
Watches `incoming_questions/` for any new or modified .docx files.
Whenever a file is dropped or edited, it automatically runs sync.sh.
"""

import os
import time
import subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INCOMING_DIR = os.path.join(ROOT, 'incoming_questions')
SYNC_SCRIPT = os.path.join(ROOT, 'sync.sh')

def get_dir_state():
    state = {}
    if not os.path.exists(INCOMING_DIR):
        return state
    for f in os.listdir(INCOMING_DIR):
        if f.endswith('.docx') and not f.startswith('~$'):
            path = os.path.join(INCOMING_DIR, f)
            try:
                state[f] = os.path.getmtime(path)
            except OSError:
                pass
    return state

def main():
    print("👀 Watching 'incoming_questions/' for new or updated files...")
    print("    Drop your .docx files here to auto-ingest, rebuild and push!")
    last_state = get_dir_state()

    while True:
        time.sleep(3)
        current_state = get_dir_state()
        if current_state != last_state:
            print("\n🔄 Detected changes in incoming_questions/! Running sync pipeline...")
            time.sleep(1) # short pause to ensure file write is finished
            subprocess.run([SYNC_SCRIPT], cwd=ROOT)
            last_state = get_dir_state()
            print("\n👀 Waiting for next files in incoming_questions/...")

if __name__ == '__main__':
    main()
