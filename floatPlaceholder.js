(function($){
	$.fn.floatPlaceholder = function()
    {

        var methods =
        {
            init : function()
            {
                var  $inputs = $(this);

               $inputs.each(function ()
                {
                    var $input = $(this);

                    if (['checkbox', 'radio'].indexOf($input.attr('type')) === -1)
                    {
                        var $parent = $input.parents('div').first().addClass('float-placeholder');

                        var $label = $parent.find('label').first();
                        $label.addClass('float-placeholder-label');

                        $input.addClass('float-placeholder-input');

                        $label.remove().clone().insertAfter($input);

                        methods.update.apply($input);

                        $input.on('click focus input blur', function(){
                            methods.update.apply($(this))
                        });
                    }
                });
            },

            update :  function()
            {
                var  $input = $(this);
                var $wrapper = $input.closest('.float-placeholder');

                if( $input.val() !== '' || $input.is(':active') || $input.is(':focus') || $input.prop('tagName') === 'SELECT'){
                    $input.addClass('is-floating');
                } else {
                    $input.removeClass('is-floating');
                }

                if($input.is(':focus')){
                    $wrapper.addClass('is-focused');
                } else {
                    $wrapper.removeClass('is-focused');
                }
            },

            textarea : function()
            {
                var $textareas = $(this)
                $textareas.addClass('float-placeholder-textarea')
            }
        };

        methods.init.apply($(this).find('input'));
        methods.textarea.apply($(this).find('textarea'));

    };
})(jQuery);

