#!/usr/bin/env bash

for d in ./admission/03-prework/*; do
  if [ -d "$d" ]; then
    for sd in $d/solution/*; do
      if [ -d "$sd" ]; then
        target=${sd/solution/sandbox}
        cp -rf "$sd/package.json" "$sd/test" $target
      fi
    done
  fi
done
