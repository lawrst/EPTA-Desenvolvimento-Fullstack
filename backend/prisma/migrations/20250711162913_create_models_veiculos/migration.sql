-- CreateTable
CREATE TABLE "veiculos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "archieved_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "unarchieved_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "veiculos_pkey" PRIMARY KEY ("id")
);
