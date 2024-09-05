/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  BrandInstance as PrismaBrandInstance,
  BrandRule as PrismaBrandRule,
  Presentation as PrismaPresentation,
} from "@prisma/client";

import { LocalStorageService } from "src/storage/providers/local/local.storage.service";
import { InputJsonValue } from "src/types";
import { FileDownload, FileUpload } from "src/storage/base/storage.types";
import { LocalStorageFile } from "src/storage/providers/local/local.storage.types";

export class BrandInstanceServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly localStorageService: LocalStorageService
  ) {}

  async count(
    args: Omit<Prisma.BrandInstanceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.brandInstance.count(args);
  }

  async brandInstances(
    args: Prisma.BrandInstanceFindManyArgs
  ): Promise<PrismaBrandInstance[]> {
    return this.prisma.brandInstance.findMany(args);
  }
  async brandInstance(
    args: Prisma.BrandInstanceFindUniqueArgs
  ): Promise<PrismaBrandInstance | null> {
    return this.prisma.brandInstance.findUnique(args);
  }
  async createBrandInstance(
    args: Prisma.BrandInstanceCreateArgs
  ): Promise<PrismaBrandInstance> {
    return this.prisma.brandInstance.create(args);
  }
  async updateBrandInstance(
    args: Prisma.BrandInstanceUpdateArgs
  ): Promise<PrismaBrandInstance> {
    return this.prisma.brandInstance.update(args);
  }
  async deleteBrandInstance(
    args: Prisma.BrandInstanceDeleteArgs
  ): Promise<PrismaBrandInstance> {
    return this.prisma.brandInstance.delete(args);
  }

  async uploadSamplePresentation<T extends Prisma.BrandInstanceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandInstanceFindUniqueArgs>,
    file: FileUpload
  ): Promise<PrismaBrandInstance> {
    file.filename = `profilePicture-${args.where.id}.${file.filename
      .split(".")
      .pop()}`;
    const containerPath = "samplePresentation";
    const samplePresentation = await this.localStorageService.uploadFile(
      file,
      [],
      1000000,
      containerPath
    );

    return await this.prisma.brandInstance.update({
      where: args.where,

      data: {
        samplePresentation: samplePresentation as InputJsonValue,
      },
    });
  }

  async downloadSamplePresentation<
    T extends Prisma.BrandInstanceFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.BrandInstanceFindUniqueArgs>
  ): Promise<FileDownload> {
    const { samplePresentation } =
      await this.prisma.brandInstance.findUniqueOrThrow({
        where: args.where,
      });

    return await this.localStorageService.downloadFile(
      samplePresentation as unknown as LocalStorageFile
    );
  }

  async deleteSamplePresentation<T extends Prisma.BrandInstanceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandInstanceFindUniqueArgs>
  ): Promise<PrismaBrandInstance> {
    const { samplePresentation } =
      await this.prisma.brandInstance.findUniqueOrThrow({
        where: args.where,
      });

    await this.localStorageService.deleteFile(
      samplePresentation as unknown as LocalStorageFile
    );

    return await this.prisma.brandInstance.update({
      where: args.where,

      data: {
        samplePresentation: Prisma.DbNull,
      },
    });
  }

  async uploadSamplePresentations<T extends Prisma.BrandInstanceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandInstanceFindUniqueArgs>,
    file: FileUpload
  ): Promise<PrismaBrandInstance> {
    file.filename = `profilePicture-${args.where.id}.${file.filename
      .split(".")
      .pop()}`;
    const containerPath = "samplePresentations";
    const samplePresentations = await this.localStorageService.uploadFile(
      file,
      [],
      1000000,
      containerPath
    );

    return await this.prisma.brandInstance.update({
      where: args.where,

      data: {
        samplePresentations: samplePresentations as InputJsonValue,
      },
    });
  }

  async downloadSamplePresentations<
    T extends Prisma.BrandInstanceFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.BrandInstanceFindUniqueArgs>
  ): Promise<FileDownload> {
    const { samplePresentations } =
      await this.prisma.brandInstance.findUniqueOrThrow({
        where: args.where,
      });

    return await this.localStorageService.downloadFile(
      samplePresentations as unknown as LocalStorageFile
    );
  }

  async deleteSamplePresentations<T extends Prisma.BrandInstanceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BrandInstanceFindUniqueArgs>
  ): Promise<PrismaBrandInstance> {
    const { samplePresentations } =
      await this.prisma.brandInstance.findUniqueOrThrow({
        where: args.where,
      });

    await this.localStorageService.deleteFile(
      samplePresentations as unknown as LocalStorageFile
    );

    return await this.prisma.brandInstance.update({
      where: args.where,

      data: {
        samplePresentations: Prisma.DbNull,
      },
    });
  }

  async findBrandRules(
    parentId: string,
    args: Prisma.BrandRuleFindManyArgs
  ): Promise<PrismaBrandRule[]> {
    return this.prisma.brandInstance
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .brandRules(args);
  }

  async findPresentations(
    parentId: string,
    args: Prisma.PresentationFindManyArgs
  ): Promise<PrismaPresentation[]> {
    return this.prisma.brandInstance
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .presentations(args);
  }
}
