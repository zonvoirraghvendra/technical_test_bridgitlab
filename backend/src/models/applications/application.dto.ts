import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, IsNumber, Min, Max, IsDate, IsEnum } from 'class-validator';
import { ApplicationStatus } from 'src/enums/application-status.enum';

export class ApplicationDto {
     
     @ApiPropertyOptional({
          description: 'The primary key for the row',
     })
     @IsInt()
     @IsOptional()
     id?: number;

     @ApiPropertyOptional({
          description: 'link the broker',
          type: Number,
     })
     @IsInt()
     @IsOptional()
     @Min(0)
     brokerId: number;

     @ApiProperty({
          description: 'Name of the applicant',
     })
     @IsString()
     @IsNotEmpty()
     applicantName: string;

     @ApiProperty({
          description: 'Email address of the applicant',
     })
     @IsEmail()
     @IsNotEmpty()
     applicantEmail: string;

     @ApiProperty({
          description: 'Mobile number of the applicant',
     })
     @IsString()
     @IsNotEmpty()
     applicantMobilePhoneNumber: string;

     @ApiProperty({
          description: 'Address of the applicant',
     })
     @IsString()
     @IsNotEmpty()
     applicantAddress: string;

     @ApiProperty({
          description: 'Annual income before tax of the applicant',
     })
     @IsNumber()
     @Min(0)
     annualIncomeBeforeTax: number;

     @ApiProperty({
          description: 'Incoming address of the applicant',
     })
     @IsString()
     @IsNotEmpty()
     incomingAddress: string;

     @ApiProperty({
          description: 'Incoming deposit amount',
     })
     @IsNumber()
     @Min(0)
     incomingDeposit: number;

     @ApiProperty({
          description: 'Incoming price of the property',
     })
     @IsNumber()
     @Min(0)
     incomingPrice: number;

     @ApiProperty({
          description: 'Incoming stamp duty amount',
     })
     @IsNumber()
     @Min(0)
     incomingStampDuty: number;

     @ApiProperty({
          description: 'Requested loan amount',
     })
     @IsNumber()
     @Min(0)
     loanAmount: number;

     @ApiProperty({
          description: 'Duration of the loan in months',
     })
     @IsInt()
     @Min(1)
     @Max(360) // assuming maximum loan duration is 30 years
     loanDuration: number;

     @ApiProperty({
          description: 'Monthly expenses of the applicant',
     })
     @IsNumber()
     @Min(0)
     monthlyExpenses: number;

     @ApiProperty({
          description: 'Outgoing address of the applicant',
     })
     @IsString()
     @IsNotEmpty()
     outgoingAddress: string;

     @ApiProperty({
          description: 'Outgoing mortgage amount',
     })
     @IsNumber()
     @Min(0)
     outgoingMortgage: number;

     @ApiProperty({
          description: 'Outgoing valuation amount',
     })
     @IsNumber()
     @IsOptional()
     @Min(0)
     outgoingValuation: number;

     @ApiProperty({
          description: 'Savings contribution amount',
     })
     @IsNumber()
     @Min(0)
     savingsContribution: number;

     /**
      * The broker's status active/inactive/etc
      */
     @ApiPropertyOptional({ description: "The application status", enum: ApplicationStatus })
     @IsEnum(ApplicationStatus)
     @IsOptional()
     status?: ApplicationStatus;

     /**
      * The date the row was created
      */
     @ApiPropertyOptional({ description: 'The date the row was created', type: Date, format: 'date-time' })
     @IsDate()
     @IsOptional()
     createdAt?: Date;
     /**
      * The date the row last modified
      */
     @ApiPropertyOptional({ description: 'The date the row was last modified', type: Date, format: 'date-time' })
     @IsDate()
     @IsOptional()
     updatedAt?: Date;
}
