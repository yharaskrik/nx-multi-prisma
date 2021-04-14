There are two libs here prisma1 and prisma2, each has a prisma schema in it and has the prisma deps added to its dependencies
once you yarn install inside each of the libs and then generate the schema check out the apis app.service.ts and notice
that each nest service's type definitions have the same entity on it. even though they should be different,
since they are referencing separately compiled prisma clients
