# demo-flatbuffer-ts
demo-flatbuffer-ts


## Steps to use

### Manually
-  Install flat buffer locally  
   - [Mac](https://formulae.brew.sh/formula/flatbuffers)
   - [Linux](https://gist.github.com/ankur-anand/389536ccd5accd50143bdacf605dc79b)
-  Generate the binary: `flatc -b src/schemas/PersonSchema.fbs src/data/3ac6242d-795f-4801-9b49-f793e1e9dd0f.json`
-  Convert binary to json: `flatc --raw-binary -t --strict-json  src/schemas/PersonSchema.fbs -- 3ac6242d-795f-4801-9b49-f793e1e9dd0f.bin`


## Useful links
- [flatbuffers.dev](https://flatbuffers.dev/)
