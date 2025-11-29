-- Add inquiry_type column to personal_care_inquiries table
ALTER TABLE personal_care_inquiries 
ADD COLUMN inquiry_type TEXT CHECK (inquiry_type IN ('personal_care', 'care_pay_card')) DEFAULT 'personal_care';

-- Set default value for existing records
UPDATE personal_care_inquiries 
SET inquiry_type = 'personal_care' 
WHERE inquiry_type IS NULL;

-- Add comment for documentation
COMMENT ON COLUMN personal_care_inquiries.inquiry_type IS 'Type of inquiry: personal_care for Personal Care Plan, care_pay_card for Care Pay Card Application';