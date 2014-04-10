'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {
		var htmlElement;
	
		beforeEach(function() {
      browser.get('index.html#/view1');
    });
		
					
		it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] form')).first().getAttribute('id')).
        toMatch(/frmEdit/);
    });
 		// Make
		it('should have a "Make:" label', function() {
			htmlElement = element(by.id('lblMake'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getText()).toEqual('Make:');
		});
		it('should have a "Make" edit', function() {
			htmlElement = element(by.id('edMake'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getAttribute('value')).toEqual('Honda');
		});	
		it('should have a "Make" span', function() {
			htmlElement = element(by.id('sMake'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getText('value')).toEqual('Honda');
		});	
		it('should be able to enter data in the Make edit, edit and span should have the entered value', 
			function() {	
			element(by.id('edMake')).clear();
			element(by.id('edMake')).sendKeys('Toyota');

			htmlElement = element(by.id('edMake'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getAttribute('value')).toEqual('Toyota');
			
			htmlElement = element(by.id('sMake'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getText('value')).toEqual('Toyota');
		});		
		// Model
				it('should have a "Model:" label', function() {
			htmlElement = element(by.id('lblModel'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getText()).toEqual('Model:');
		});
		it('should have a "Model" edit', function() {
			htmlElement = element(by.id('edModel'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getAttribute('value')).toEqual('Civic');
		});	
		it('should have a "Model" span', function() {
			htmlElement = element(by.id('sModel'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getText('value')).toEqual('Civic');
		});	
		it('should be able to enter data in the Model edit, edit and span should have the entered value', 
			function() {	
			element(by.id('edModel')).clear();
			element(by.id('edModel')).sendKeys('Accord');

			htmlElement = element(by.id('edModel'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getAttribute('value')).toEqual('Accord');
			
			htmlElement = element(by.id('sModel'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getText('value')).toEqual('Accord');
		});		

		// Year
				it('should have a "Year:" label', function() {
			htmlElement = element(by.id('lblYear'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getText()).toEqual('Year:');
		});
		it('should have a "Year" edit', function() {
			htmlElement = element(by.id('edYear'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getAttribute('value')).toEqual('2014');
		});	
		it('should have a "Year" span', function() {
			htmlElement = element(by.id('sYear'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getText('value')).toEqual('2014');
		});	
	
	
		it('should be able to enter data in the Year edit, edit and span should have the entered value', 
			function() {	
				
				element(by.id('edYear')).Option.valueOf('2013').click();
			
			htmlElement = element(by.id('edYear'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getAttribute('value')).toEqual('2013');
			
			htmlElement = element(by.id('sYear'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getText('value')).toEqual('2013');


		});		
  

  	// Price
		it('should have a "Price:" label', function() {
			htmlElement = element(by.id('lblPrice'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getText()).toEqual('Price:');
		});

		it('should have a "Price" edit', function() {
			htmlElement = element(by.id('edPrice'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getAttribute('value')).toEqual('24000');
		});	
			
 		it('should have a "Price" span', function() {
			htmlElement = element(by.id('sPrice'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getText('value')).toEqual('$24,000.00'); 
			
		});	
		
		it('should be able to enter data in the Model edit, edit and span should have the entered value', 
			function() {	
			element(by.id('edPrice')).clear();
			element(by.id('edPrice')).sendKeys('16000');

			htmlElement = element(by.id('edPrice'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getAttribute('value')).toEqual('16000');
			
			htmlElement = element(by.id('sPrice'));
			expect(htmlElement).not.toBe(undefined);
			expect(htmlElement.getText('value')).toEqual('$16,000.00');
		});		

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });

    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });
		

  });

	});
