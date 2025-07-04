npx prisma init --datasource-provider postgresql

npx prisma generate

npx prisma migrate reset

npx prisma migrate dev --name init 

npx prisma db seed

docker run -v ./chroma-data:/data -p 8000:8000 chromadb/chroma
